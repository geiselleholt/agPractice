
import express from 'express';
import db from '../db/conn.mjs'

let router = express.Router();

router.get('/', async (req, res) => {
    //Specify Collection
    let collection = await db.collection('grades');
  
    let result = await collection
      .aggregate(
        [
          {
            $project: {
              _id: 0,
              class_id: 1,
              learner_id: 1,
              avg: { $avg: '$scores.score' },
                },
              },
              {
                $skip: 80
              }, {
                $limit: 1
              }
        ],
        { maxTimeMS: 60000, allowDiskUse: true }
      )
      .limit(10)
      .toArray();
  
    res.json(result);
  });;

export default router;
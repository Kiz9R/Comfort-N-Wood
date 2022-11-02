const agg = [
  {
    $match: {
      product: new ObjectId("63612cdfc207251becfe3ee0"),
    },
  },
  {
    $group: {
      _id: null,
      avarageRating: {
        $avg: "$rating",
      },
      numOfReviews: {
        $sum: 1,
      },
    },
  },
];

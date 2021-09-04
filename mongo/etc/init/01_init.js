// Initialize replica sets
rs.initiate({
  _id: "replset",
  members: [
    {
      _id: 0,
      host: "mongodb-primary:27017",
    },
    {
      _id: 1,
      host: "mongodb-secondary:27017",
    },
    {
      _id: 2,
      host: "mongodb-arbiter:27017",
      arbiterOnly: true,
    },
  ],
});

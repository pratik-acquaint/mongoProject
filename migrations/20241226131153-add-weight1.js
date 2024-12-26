module.exports = {
  async up(db, client) {
    // Add the `is_live` field to all existing documents in the `users` collection.
    // Set a default value, for example, `false` or `null`.
    await db.collection("products").updateMany(
      {}, // This applies to all documents in the `users` collection
      { $set: { weight: 0 } } // Set the default value of `is_live` to `false`
    );
  },

  async down(db, client) {
    // Remove the `is_live` field from all documents in the `users` collection.
    await db.collection("products").updateMany(
      {}, // This applies to all documents in the `users` collection
      { $unset: { weight: 0 } } // Unset (delete) the `is_live` field
    );
  },
};
// const { passwords, Forms, Comments } = require('../../models');

// //passwords method testing
// test('passwords.all() should return an array', async () => {
//   const result = (await passwords.all()) || [];
//   expect(result.length).toEqual(2);
// });

// test('passwords.newpassword(...) creates a new password in table', async () => {
//   await passwords.newpassword('test1', 'testPassword1');
//   const result = await passwords.all();
//   expect(result.length).toEqual(3);
// });

// test('passwords.newpassword(...) increases id of newpassword by 1', async () => {
//   const newpassword = await passwords.newpassword('test1', 'testPassword1');
//   expect(newpassword.dataValues.id).toEqual(4);
// });
// test('passwords.newpassword(...) populates the fields correctly', async () => {
//   const newpassword = await passwords.newpassword('test', 'testPassword');
//   expect(newpassword.dataValues.userName).toEqual('test');
// });

// //Forms method testing
// test('Forms.all() should return an array', async () => {
//   const result = (await Forms.all()) || [];
//   expect(result.length).toEqual(3);
// });

// test('Forms.single() should return a single form entry', async () => {
//   const result = (await Forms.single(1)) || [];
//   expect(result.length).toEqual(1);
// });

// test('Forms.newForm(...) creates a new applicant form', async () => {
//   const newForm = await Forms.newForm(
//     'testInput',
//     'testArea',
//     true,
//     new Date()
//   );
//   const result = (await Forms.all()) || [];
//   expect(result.length).toEqual(4);
// });

// test('Forms.newForm(...) increases id by 1', async () => {
//   const newForm = await Forms.newForm(
//     'testInput',
//     'testArea',
//     true,
//     new Date()
//   );
//   expect(newForm.dataValues.id).toEqual(5);
// });

// test('Forms.newForm(...) populates fields correctly', async () => {
//   const newForm = await Forms.newForm(
//     'testInput',
//     'testArea',
//     true,
//     new Date()
//   );
//   expect(newForm.dataValues.textInput).toEqual('testInput');
// });

// test('Forms.newForm(...) adds status field defaulting to "new"', async () => {
//   const newForm = await Forms.newForm(
//     'testInput',
//     'testArea',
//     true,
//     new Date()
//   );
//   expect(newForm.dataValues.status).toEqual('New');
// });

// test('Forms.update(...) will update status field', async () => {
//   a = await Forms.updateForm(1, 'Accepted');
//   results = await Forms.findAll();
//   expect(results[0].dataValues.status).toEqual('Accepted');
// });

// //Comments method testing
// test('Comments.all() should return an array', async () => {
//   const result = (await Comments.all()) || [];
//   expect(result.length).toEqual(1);
// });

// test('Comment.newComment(...) creates a new Comment in table', async () => {
//   await Comments.newComment(2, 'john cena', 1, 'This is another test comment');
//   const result = await Comments.all();
//   expect(result.length).toEqual(2);
// });

// test('Comments.newComment(...) increases id of newpassword by 1', async () => {
//   const newComment = await Comments.newComment(
//     2,
//     'johncena',
//     'test1',
//     'testPassword1'
//   );
//   expect(newComment.dataValues.id).toEqual(3);
// });
// test('Comments.newComment(...) populates the fields correctly', async () => {
//   const newComment = await Comments.newComment(2, 'john cena', 1, 'last test');
//   expect(newComment.dataValues.comment).toEqual('last test');
// });

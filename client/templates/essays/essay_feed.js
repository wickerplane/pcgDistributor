var postsData = [
 	{
 		title: 'Student #1',
 		url: 'http://upenn.edu',
 		essayNumber: 1
	 },
 	{
 		title: 'Student #2',
 		url: 'http://ask.com',
 		essayNumber: 2
 	},
 	{
 		title: 'Student #3',
 		url: 'http://google.com',
 		essayNumber: 3
 	}
];
Template.postsList.helpers({
 posts: postsData
});
module.exports = {
  url: '/edit/:story_id?back',
  template: __inline('./edit.html'),
  controller: ['$scope', '$injector', function ($scope, $injector) {
  	require.async('edit.async.js', function(ctrl) {
			$injector.invoke(ctrl, this, {'$scope': $scope});
		});
  }]
};

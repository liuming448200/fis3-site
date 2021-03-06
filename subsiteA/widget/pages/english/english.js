module.exports = {
  url: '/english/:word_id',
  template: __inline('./english.html'),
  controller: ['$scope', '$injector', function ($scope, $injector) {
  	require.async('english.async.js', function(ctrl) {
			$injector.invoke(ctrl, this, {'$scope': $scope});
		});
  }]
};

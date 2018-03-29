app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'This Month\'s Bestsellers'; 
  $scope.promo = 'The most popular books this month.';
  $scope.products=[ 
  { 
    name: 'Java Programming',
    price: 19, 
    pubdate: new Date('2014', '03', '08'), 
    cover: 'img/Java_Programming_Cover.jpg',
    likes:0,
    dislikes:0
  }, 
  { 
    name: 'Python Programming',
    price: 8, 
    pubdate: new Date('2013', '08', '01'), 
    cover: 'img/python.jpg' ,
    likes:0,
    dislikes:0
  } ,
  {
      name: 'JavaScript',
      price: 8,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/javascript.jpg',
      likes:0,
      dislikes:0
  },
  {
      name: 'The Truth about HTML5',
      price: 8,
      pubdate: new Date('2013', '08', '01'),
      cover: 'img/html.jpg',
      likes:0,
      dislikes:0
  }
  ];
  $scope.plusOne=function(index) {
      console.log("function",index);
      $scope.products[index].likes += 1;
};

$scope.minusOne=function(index) {
  $scope.products[index].dislikes += 1;
};
  
}]);

var movies = [
  { 
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    image: 'https://vignette.wikia.nocookie.net/harrypotter/images/9/9d/Harry-Potter-Wizarding-World-Weekly.jpg/revision/latest/scale-to-width-down/670?cb=20160914202759'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    image: 'http://wywrota.pl:8080/pliki/site_images/8848bded_jpeg-lg'
  },
  {
    id: 3,
    title: 'Star Wars: Ostatni Jedi',
    desc: 'Film o tym jak Luke Skywalker założył farmę',
    image: 'https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/splay/2017/12/star-wars-the-last-jedi-gwiezdne-wojny-ostatni-jedi-recenzja-16-1180x788.jpeg'
  },
  {
    id: 4,
    title: 'Avengers',
    desc: 'Film o grupie kolesi',
    image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MDMxODE3MF5BMl5BanBnXkFtZTcwMDEzOTY0Nw@@._V1_SY500_CR0,0,337,500_AL_.jpg'
  },
];

var MoviesList = React.createClass({
  render : function () {
    return (
      React.createElement('h1', {}, 'Lista filmów' )
      )
  }
})
var MovieTitle = React.createClass({
  render : function () {
    return (
      React.createElement('h2', {}, this.props.title)
      )  
  }
})
var MovieDescription = React.createClass({
  render : function () {
    return (
      React.createElement('p', {}, this.props.desc)
      )
  }
})
var MovieImage = React.createClass({
  render : function () {
    return (
      React.createElement('img', {src: this.props.image}, )
      )
  }
})
var movie = React.createClass ({
  render: function () {
    return (
      React.createElement('li', {key: this.props.id}, 
        React.createElement(MovieTitle, {title: this.props.title}),
        React.createElement(MovieDescription, {desc: this.props.desc}),
        React.createElement(MovieImage, {image: this.props.image},)
        )
      ) 
  }
})
var Movies = React.createClass({
  propTypes: {},

  render: function () {
    return (
      React.createElement('div', {}, React.createElement(MoviesList),
        React.createElement('ul', {}, movies.map(function(film){
          return React.createElement(movie, {image: film.image, desc: film.desc, title: film.title} )
        })
        )
        )
      )
  }   
});
var element = React.createElement(Movies);
ReactDOM.render(element, document.getElementById('app'));
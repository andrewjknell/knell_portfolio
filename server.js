const express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    app = express()

app.use(express.static(__dirname + '/knell/dist/knell'));

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./knell/dist/knell/index.html"))
});

app.listen(8000, () => console.log('listening on port 8000'));


// .containerr {
// 	width: 100%;
// 	background-color: rgb(253, 253, 253);
// }
// .header{
// 	text-align: center;
// 	padding-top: 19%;
// 	padding-bottom:22%;
// 	background-color: rgb(176, 216, 252);
// 	color: rgb(0, 0, 0);
// }
// .header h1{
// 	width: 98%;
// 	font-weight: bold;
// 	font-size: 5.1rem;
//     font-family:"Arial", Helvetica, sans-serif;
// }
// .header h4{
// 	width: 95%;
// 	font-weight: bold;
// 	font-size: 1.6rem;
// 	font-family: "Arial", Helvetica, sans-serif;
// }
// .plist{
// 	margin-top: 10px;
// 	width: 13%;
// 	display: inline-block;
// 	margin-bottom: -10px;
// }
// .sidenav{
// 	text-align: center;
// 	margin-top: 3px;
// 	padding: 10px 0 10px 0;
// 	position: fixed;
// 	right: 0;
// 	width: 70px;
// 	font-size: 2.7rem;
// 	border-radius: 10px;
// 	background-color: rgb(65, 65, 65);
// }
// .sidenav i{
// 	width: 100%;
// }

// #projects{
// 	padding:20px 110px 0 110px;
// 	background-color: rgb(182, 252, 252);
// }
// #projects h1{
// 	font-family:"Arial", Helvetica, sans-serif;
// 	font-weight: bold;
// 	font-size: 4rem;
// 	width: 20%;
// 	margin-bottom: 25px;
// }
// #projects h1:hover{
// 	-webkit-animation: swing 1s ease;
// 	animation: swing 1s ease;
// 	-webkit-animation-iteration-count: 1;
// 	animation-iteration-count: 1;
// }
// .carousel{
// 	width: 680px;
// 	overflow: hidden;
// 	white-space: nowrap;
// 	height: 310px;
// }
// .carousel img{
// 	width: 680px;
// 	display: inline-block;
// 	height: 310px;
// }
// #left{
// 	width: 80px;
// 	height: 310px;
// 	/* margin-top: -315px; */
// 	background:rgba(187, 241, 255, 0.301);
// 	position: absolute;
// 	border: none;
// 	outline: none;
// 	font-weight: bold;
// 	font-size: 1.7rem;
// 	display: block;
// }
// #right{
// 	display: block;
// 	width: 80px;
// 	height: 310px;
// 	/* margin-top: -315px; */
// 	margin-left: 600px;
// 	background:rgba(187, 241, 255, 0.301);
// 	border: none;
// 	position: absolute;
// 	outline: none;
// 	font-weight: bold;
// 	font-size: 1.7rem;
// }
// #leftRec{
// 	width: 80px;
// 	height: 310px;
// 	background:rgba(187, 241, 255, 0.301);
// 	position: absolute;
// 	right: 0;
// 	margin-right: 710px;
// 	border: none;
// 	outline: none;
// 	font-weight: bold;
// 	font-size: 1.7rem;
// 	display: block;
// }
// #rightRec{
// 	display: block;
// 	width: 80px;
// 	height: 310px;
// 	margin-right: 110px;
// 	background:rgba(187, 241, 255, 0.301);
// 	border: none;
// 	position: absolute;
// 	right: 0;
// 	outline: none;
// 	font-weight: bold;
// 	font-size: 1.7rem;
// }
// .projectOne{
// 	display: flex;
// 	margin-bottom: 90px;
// }
// #controlOne{
// 	display: inline-block;
// }
// .honorable{
// 	font-size: 1.1rem;
// 	margin-left: 30px;
// 	vertical-align: top;
// 	display: inline-block;
// 	flex: 1;
// }
// .githubb{
// 	display: flex;
// }
// .githubb a{
// 	color: rgb(0, 0, 0);
// 	font-size: 3rem;
// 	width: 50px;
// }
// .githubb a:hover{
// 	color: rgb(29, 82, 255);
// }
// .githubb h5{
// 	margin-top: 33px;
// }
// #controlTwo{
// 	display: inline-block;
// }
// .projectTwo{
// 	display: flex;
// 	padding-bottom: 50px;
// }
// .otp{
// 	margin-right: 30px;
// 	vertical-align: top;
// 	display: inline-block;
// 	flex: 1;
// 	font-size: 1.1rem;
// }
// #about{
// 	padding:100px 160px 0 160px;
// 	background-color: rgb(255, 247, 199);
// 	min-height: 500px;
// 	display: flex;
// 	/* border-bottom: solid black 1px; */
// }
// .aboutMe{
// 	margin-left: 320px;
// 	font-size: 1.1rem;
// }
// .swap-on-hover {
// 	position: relative;	
// 	max-width: 400px;
//   }
//   .swap-on-hover img {
// 	position: absolute;
// 	top:0;
// 	left:0;
// 	border-radius: 150px;
// 	overflow: hidden;
// 	height: 290px;
// 	width: 290px;
// 	}
// 	.swap-on-hover .swap-on-hover__front-image {
// 	  z-index: 9999;
// 	  transition: opacity .3s linear;
// 	  cursor: pointer;
// 	}
	
// 	.swap-on-hover:hover > .swap-on-hover__front-image{
// 	  opacity: 0;
// 	} 

// .plist h4:hover{
// 	-webkit-animation: swing 1s ease;
// 	animation: swing 1s ease;
// 	-webkit-animation-iteration-count: 1;
// 	animation-iteration-count: 1;
// }
// .header h2:hover{
// 	-webkit-animation: swing 1s ease;
// 	animation: swing 1s ease;
// 	-webkit-animation-iteration-count: 1;
// 	animation-iteration-count: 1;
// }
// .header h1:hover{
// 	-webkit-animation: swing 1s ease;
// 	animation: swing 1s ease;
// 	-webkit-animation-iteration-count: 1;
// 	animation-iteration-count: 1;
// }
// #footer {
//     width:100%;
//     height:80px;
//     background-repeat: repeat;
//     background-attachment: scroll;
//     background-position: 0% 0%;
// 	position: fixed;
//     bottom: 0pt;
//     left: 0pt;
//     background-image: url("https://www.pacifica-montessori.com/wp-content/uploads/2018/03/footerwaves.png");
// }
// #contact{
// 	text-align: center;
// 	padding-top: 60px;
// 	padding-bottom: 90px;
// 	background-color: rgb(110, 255, 192);
// }
// .linkedin a{
// 	color: rgb(0, 8, 232);
// }
// .instagram a{
// 	color: rgb(255, 67, 34);
// }
// .github a{
// 	color: rgb(0, 0, 0);
// }
// .gmail a{
// 	color: rgb(255, 255, 255);
// }
// section #services {
// 	transform: translatez(0);
//   }
//   section #services li {
//     width: 9%;
// 	display:inline-block;
// 	list-style: none;
//   }
//   section #services li div {
// 	width: 70px;
// 	height: 70px;
// 	font-size: 4rem;
// 	text-align: center;
// 	line-height: 70px;
// 	background-color: rgba(255, 255, 255, 0);
// 	transition: all 0.5s ease;
//   }
//   section #services li div:hover {
// 	transform: rotate(360deg);
// 	border-radius: 100px;
//   }

// @keyframes gradientBG {
// 	0% {
// 		background-position: 0% 50%;
// 	}
// 	50% {
// 		background-position: 100% 50%;
// 	}
// 	100% {
// 		background-position: 0% 50%;
// 	}
// }
// @-webkit-keyframes swing{
//     15%
//     {
//         -webkit-transform: translateX(5px);
//         transform: translateX(5px);
//     }
//     30%
//     {
//         -webkit-transform: translateX(-5px);
//        transform: translateX(-5px);
//     } 
//     50%
//     {
//         -webkit-transform: translateX(3px);
//         transform: translateX(3px);
//     }
//     65%
//     {
//         -webkit-transform: translateX(-3px);
//         transform: translateX(-3px);
//     }
//     80%
//     {
//         -webkit-transform: translateX(2px);
//         transform: translateX(2px);
//     }
//     100%
//     {
//         -webkit-transform: translateX(0);
//         transform: translateX(0);
//     }
// }
// @keyframes swing{
//     15%
//     {
//         -webkit-transform: translateX(5px);
//         transform: translateX(5px);
//     }
//     30%
//     {
//         -webkit-transform: translateX(-5px);
//         transform: translateX(-5px);
//     }
//     50%
//     {
//         -webkit-transform: translateX(3px);
//         transform: translateX(3px);
//     }
//     65%
//     {
//         -webkit-transform: translateX(-3px);
//         transform: translateX(-3px);
//     }
//     80%
//     {
//         -webkit-transform: translateX(2px);
//         transform: translateX(2px);
//     }
//     100%
//     {
//         -webkit-transform: translateX(0);
//         transform: translateX(0);
//     }
// }


// @media screen and (max-width: 480px) {
	
//   }

// @media screen and (min-width:860px) and (max-width:1100px){
// 	.plist{
// 		width: 16%;
// 	}
// 	#projects{
// 		padding: 20px 40px 0 40px;
// 	}
// 	.projectOne{
// 		flex-direction: column;
// 	}
// 	.projectTwo{
// 		flex-direction: column-reverse;
// 	}
// 	#rightRec{
// 		right: 0;
// 		margin-top: -224px;
// 		margin-right: 303px;
// 	 }
// 	#leftRec{
// 	     left: 0;
// 	     margin-left: 37px;
// 	     margin-top: -224px;
// 	}
// }



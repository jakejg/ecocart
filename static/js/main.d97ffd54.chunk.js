(this["webpackJsonpquiz-app-youtube"]=this["webpackJsonpquiz-app-youtube"]||[]).push([[0],[,,,,,,,,function(e,t,A){"use strict";A.d(t,"a",(function(){return _}));var _=[{id:"commute_method",question:"To start, how do you get around?",icon:"car",multiple:!0,options:[{type:"text",value:"Car",score:4.6},{type:"text",value:"Public transport",score:3.5},{type:"text",value:"Ride share",score:2.2},{type:"text",value:"Bike / walk",score:0}],next:"1"},{condition:"prevSelections[0] == 'Car'",question:"Is your car electric?",icon:"car_electric",multiple:!1,options:[{type:"text",value:"Yes",score:-3.1},{type:"text",value:"No",score:0}]},{question:"Where do you usually go?",icon:"pin",multiple:!1,options:[{type:"text",value:"Not far",aside:"~50 miles a week",score:-2.5},{type:"text",value:"Commute to work",aside:"~200 miles a week",score:0},{type:"text",value:"I get around",aside:"~400 miles a week",score:3.4},{type:"input",value:"Other",aside:"miles a week",score:"parseInt(value)*0.02"}]},{question:"How often do you fly?",icon:"airplane",multiple:!1,isSubScore:!0,options:[{type:"input",value:"Type your answer here...",aside:"times a year",score:"value"}]},{condition:"parseInt(prevSelections[0]) > 0",question:"Alright, how far do you usually fly?",icon:"airplane",multiple:!1,options:[{type:"text",value:"Across the world",aside:"2500+ miles",score:"prevSubScore*1.6"},{type:"text",value:"Across the country",aside:"1000-2500 miles",score:"prevSubScore*0.8"},{type:"text",value:"Not far",aside:"Less than 1000 miles",score:"prevSubScore*0.3"}]},{question:"What's your diet like?",icon:"diet_type",multiple:!1,subtext:"Yes, food has a carbon footprint too",options:[{type:"text",value:"Vegetarian",score:1.7},{type:"text",value:"Vegan",score:1.5},{type:"text",value:"I eat it all",score:2.9}]},{question:"Where do you live? ",icon:"live",multiple:!1,subtext:"I swear we aren't creepy",isSubScore:!0,options:[{type:"text",value:"Apartment",aside:"0-2 bedrooms",score:4.1},{type:"text",value:"House",aside:"3-5 bedrooms",score:8.2},{type:"text",value:"Big house",aside:"5+ bedrooms",score:12.3}]},{question:"Got it, how many people live there?",icon:"people_count",multiple:!1,subtext:"(not including fluffy)",options:[{type:"input",value:"Type your answer here...",aside:"people",score:"prevSubScore/value"}]},{question:"How often do you use heating and cooling?",icon:"heating_freq",multiple:!1,options:[{type:"text",value:"Most days",score:3.5},{type:"text",value:"Only when it's super hot or cold",score:0},{type:"text",value:"Never",score:-2.3}]},{question:"About how much stuff do you order online?",icon:"stuff_count",multiple:!1,isSubScore:!0,options:[{type:"text",value:"All my stuff",aside:"30+ items per month",score:2.2},{type:"text",value:"Some stuff",aside:"10-20 items",score:1.1},{type:"text",value:"Barely any stuff",aside:"less than 10 items",score:.3},{type:"input",value:"Other",aside:"items per month",score:"value*0.05"}]},{question:"When do you get new stuff?",icon:"new_stuff",multiple:!1,isSubScore:!0,options:[{type:"text",value:"I'm always getting new stuff",score:"prevSubScore*2"},{type:"text",value:"I sometimes get new stuff",score:"prevSubScore*1"},{type:"text",value:"I wait until my old stuff breaks",score:"prevSubScore*0.5"}]},{question:"What kind of stuff?",icon:"stuff_type",multiple:!1,options:[{type:"text",value:"Big stuff",aside:"like furniture and TVs",score:"prevSubScore*3"},{type:"text",value:"Medium stuff",aside:"like clothes and books",score:"prevSubScore*1.5"},{type:"text",value:"Small stuff",aside:"like pens and cards",score:"prevSubScore*1"},{type:"text",value:"All kinds of stuff",score:"prevSubScore*1.5"}]}]},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,A){e.exports=A.p+"static/media/co2.380539e6.png"},function(e,t,A){e.exports=A.p+"static/media/home.b83b55e8.png"},function(e,t,A){e.exports=A.p+"static/media/tree_icon.d1d79770.png"},,,,function(e,t,A){"use strict";var _=A(25),a=A.n(_),r=A(44),n=A(19),s=A(0),o=A.n(s),c=A(17),i=A(22),l=A(12),u=A(40),E=(A(87),function(e){var t=e.img,_=e.title,a=e.description,r=e.price;return o.a.createElement("div",{className:"cart-item"},o.a.createElement("div",{className:"img-col"},o.a.createElement("div",{className:"img-container"},o.a.createElement("img",{className:"cart-img",src:A(88)("./".concat(t))}))),o.a.createElement("div",{className:"list-col"},o.a.createElement("ul",{className:"item-list"},o.a.createElement("li",null,o.a.createElement("b",null,_)),o.a.createElement("li",{className:"item-description"},a),o.a.createElement("li",null,"$",r))))}),p=(A(90),Object({NODE_ENV:"production",PUBLIC_URL:"/ecocart",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_BASE_URL||"http://localhost:5000");t.a=function(e){var t=e.amount,A=Object(s.useState)(!1),_=Object(n.a)(A,2),m=_[0],d=_[1],C=Object(s.useState)(null),g=Object(n.a)(C,2),f=g[0],O=g[1],D=Object(s.useState)(""),B=Object(n.a)(D,2),b=B[0],I=B[1],P=Object(s.useState)(!0),h=Object(n.a)(P,2),M=h[0],v=h[1],Q=Object(s.useState)(""),w=Object(n.a)(Q,2),S=w[0],T=w[1],y=Object(s.useState)(!1),W=Object(n.a)(y,2),U=W[0],R=W[1],L=Object(c.useStripe)(),k=Object(c.useElements)(),K=document.createElement("script");K.src="https://js.hsforms.net/forms/v2.js",document.body.appendChild(K),K.addEventListener("load",(function(){R(!0)})),Object(s.useEffect)((function(){U&&window.hbspt.forms.create({portalId:"7682224",formId:"03ab0a2d-5a0f-4cae-a2f5-aaa26a9f068e",target:"#hubspotForm"})}),[U]),Object(s.useEffect)((function(){fetch("".concat(p,"/create-payment-intent"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:t})}).then((function(e){return e.json()})).then((function(e){T(e.clientSecret)}))}),[]);var N=function(){var e=Object(r.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v(t.empty),O(t.error?t.error.message:"");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(r.a)(a.a.mark((function e(t){var A;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),I(!0),e.next=4,L.confirmCardPayment(S,{payment_method:{card:k.getElement(c.CardElement)}});case 4:(A=e.sent).error?(O("Payment failed ".concat(A.error.message)),I(!1)):(O(null),I(!1),d(!0));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:"checkout"},o.a.createElement(i.a,{xs:"1",xl:"2"},o.a.createElement(l.a,null,o.a.createElement("form",{className:"payment-form",onSubmit:q},o.a.createElement(c.CardElement,{id:"card-element",onChange:N}),o.a.createElement("button",{disabled:b||M||m,id:"submit"},o.a.createElement("span",{id:"button-text"},b?o.a.createElement("div",{className:"spinner",id:"spinner"},o.a.createElement(u.a,{animation:"border",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading..."))):"Pay")),f&&o.a.createElement("div",{className:"card-error",role:"alert"},f),m&&o.a.createElement("div",{role:"alert"},"Payment succeeded!"))),o.a.createElement(l.a,null,o.a.createElement("h5",null,"Your Cart"),o.a.createElement("ul",{className:"cart-list"},o.a.createElement(E,{img:"tri-city-forest.jpg",title:"Carbon Offset",description:"Your donation will help protect a Spruce forest in Massachusetts that captures over 100,000 metric tonnes of harmful carbon dioxide every year. This project also protects the habitat of a variety of threatened mammals, birds, and reptiles.",price:t})),o.a.createElement("hr",null),o.a.createElement("div",{className:"cart-total"},o.a.createElement("div",null,"Total"),o.a.createElement("div",null,"$",t)),o.a.createElement("div",{id:"hubspotForm",className:"hubspotForm"}))))}},,,,,,,,function(e,t,A){e.exports=A.p+"static/media/airplane.9a602c73.png"},function(e,t,A){e.exports=A.p+"static/media/car.d8440113.png"},function(e,t,A){e.exports=A.p+"static/media/car_electric.bfc48df3.png"},function(e,t,A){e.exports=A.p+"static/media/diet_type.001eb7b3.png"},function(e,t,A){e.exports=A.p+"static/media/heating_freq.64209071.png"},function(e,t,A){e.exports=A.p+"static/media/live.665b810c.png"},function(e,t,A){e.exports=A.p+"static/media/loading.46d039d8.png"},function(e,t,A){e.exports=A.p+"static/media/new_stuff.18f2d56d.png"},function(e,t,A){e.exports=A.p+"static/media/people_count.19509f06.png"},function(e,t,A){e.exports=A.p+"static/media/pin.01e4fac1.png"},function(e,t,A){e.exports=A.p+"static/media/sprout_1.b91226ea.png"},function(e,t,A){e.exports=A.p+"static/media/sprout_2.faf311bf.png"},function(e,t,A){e.exports=A.p+"static/media/stuff_count.14aada8e.png"},function(e,t){e.exports="data:image/png;base64,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"},function(e,t,A){e.exports=A.p+"static/media/tree.45f0b417.png"},,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_user_Documents_Visual_Studio_2019_ecocart_ecocart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(68),C_Users_user_Documents_Visual_Studio_2019_ecocart_ecocart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(13),C_Users_user_Documents_Visual_Studio_2019_ecocart_ecocart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(14),C_Users_user_Documents_Visual_Studio_2019_ecocart_ecocart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(28),C_Users_user_Documents_Visual_Studio_2019_ecocart_ecocart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(16),C_Users_user_Documents_Visual_Studio_2019_ecocart_ecocart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(15),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_DynamicForm_scss__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(85),_DynamicForm_scss__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_DynamicForm_scss__WEBPACK_IMPORTED_MODULE_7__),_CarbonData__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(8),_CheckoutForm__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(43),_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(34),_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(35),react_transition_group__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(103),react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(22),react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(12),react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(74),react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(21),react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(76),react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(73),react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(72),_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(29),_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(17),_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_21___default=__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_21__),react_router_dom__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(5),stripePromise=Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_20__.a)("pk_test_TYooMQauvdEDq54NiTphI7jx"),DynamicForm=function(_Component){Object(C_Users_user_Documents_Visual_Studio_2019_ecocart_ecocart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(DynamicForm,_Component);var _super=Object(C_Users_user_Documents_Visual_Studio_2019_ecocart_ecocart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.a)(DynamicForm);function DynamicForm(props){var _this;return Object(C_Users_user_Documents_Visual_Studio_2019_ecocart_ecocart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.a)(this,DynamicForm),_this=_super.call(this,props),_this.nextQuestionHandler=function(){var _this$state=_this.state,selectedAnswers=_this$state.selectedAnswers,carbonScores=_this$state.carbonScores,options=_this$state.options,currAnswer=_this$state.currAnswer,path=_this$state.path,subScores=_this$state.subScores;function wait(){console.log("nextQuestionHandler / currAnswer:",currAnswer);for(var score=0,i=0;i<currAnswer.length;i++){var thisAnswer=currAnswer[i],thisAnswerScore=options[i].score;thisAnswer&&thisAnswerScore&&("string"===typeof thisAnswerScore&&(thisAnswerScore.includes("value")&&(thisAnswerScore=thisAnswerScore.replace("value",thisAnswer)),thisAnswerScore.includes("prevSubScore")&&(thisAnswerScore=thisAnswerScore.replace("prevSubScore",subScores[subScores.length-1]))),score+=eval(thisAnswerScore))}var isSubScore=_CarbonData__WEBPACK_IMPORTED_MODULE_8__.a[path[path.length-1]].isSubScore;if(isSubScore?(subScores.push(score),carbonScores.push(0)):(carbonScores.push(score),subScores.push(0)),console.log("subscores",subScores),console.log("Score",carbonScores),selectedAnswers.push(currAnswer),console.log("Selected answers",selectedAnswers),currAnswer=[],path.push(path[path.length-1]+1),console.log("Path",path),path[path.length-1]<_CarbonData__WEBPACK_IMPORTED_MODULE_8__.a.length){var questionObject=_CarbonData__WEBPACK_IMPORTED_MODULE_8__.a[path[path.length-1]],condition=questionObject.condition;if(null!=condition){condition=condition.replace("prevSelections","'".concat(selectedAnswers[selectedAnswers.length-1],"'.split(',')")),console.log("Question's gating condition",condition);var result=eval(condition);"boolean"==typeof result&&(result||(path[path.length-1]+1<_CarbonData__WEBPACK_IMPORTED_MODULE_8__.a.length?path.push(path.pop()+1):this.handleSubmit()))}this.setState({path:path,pathAbs:path.join(" "),currAnswer:currAnswer,carbonScores:carbonScores,disabled:!0,slideAnimation:!0,answerSelected:!1})}else this.handleSubmit()}_this.setState({slideAnimation:!1}),setTimeout(wait.bind(Object(C_Users_user_Documents_Visual_Studio_2019_ecocart_ecocart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.a)(_this)),1700),_this.setState({disabled:!0,answerSelected:!0})},_this.prevQuestionHandler=function(){var e=_this.state,t=e.selectedAnswers,A=e.carbonScores,_=e.currAnswer,a=e.path,r=e.subScores;_=t.pop(),A.pop(),r.pop(),a.pop(),_this.setState({path:a,pathAbs:a.join(" "),currAnswer:_,carbonScores:A,disabled:!1})},_this.validateInput=function(e){return(e=e.replace(/[^0-9]/,"")).startsWith("0")&&(e=e.slice(1)),e},_this.handleTyping=function(e){var t=e.target.value;t=_this.validateMoneyInput(t),_this.setState({payableAmount:t})},_this.checkAnswer=function(e,t,A,_){var a=_this.state,r=a.currAnswer,n=a.options,s=a.path;s[s.length-1]<_CarbonData__WEBPACK_IMPORTED_MODULE_8__.a.length&&_CarbonData__WEBPACK_IMPORTED_MODULE_8__.a[s[s.length-1]].multiple?t==r[e]?r[e]=null:r[e]=t:(r=Array.from(Array(n.length),(function(){return null})))[e]=t,console.log("Curr answer",r),_&&(r[e]=_this.validateInput(r[e])),_this.setState({currAnswer:r,disabled:r.toString().length==r.length-1},(function(){A()}))},_this.handleSubmit=function(){_this.setState({currAnswer:[],isAtSummary:!0,disabled:!0})},_this.handleNext=function(){if(_this.state.isAtSummary){var e=(_this.state.currAnswer||JSON.parse(sessionStorage.getItem("currAnswer"))).find((function(e){return"string"===typeof e}));e.startsWith("$")&&(e=e.substring(1)),_this.setState({payableAmount:e,showCheckout:!0})}else _this.nextQuestionHandler()},_this.state={currentIndex:0,path:[0],pathAbs:null,selectedAnswers:[],carbonScores:[],currAnswer:[],options:[],disabled:!0,isAtSummary:JSON.parse(sessionStorage.getItem("isAtSummary"))||!1,checkoutModalShow:!1,payableAmount:10,productName:"Test",clickedCheckoutConfirm:!1,connectionError:!1,slideAnimation:!0,showCheckout:!1,answerSelected:!1,subScores:[]},_this}return Object(C_Users_user_Documents_Visual_Studio_2019_ecocart_ecocart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.a)(DynamicForm,[{key:"componentDidMount",value:function(){var e=this,t=this.state.path;this.setState((function(){return{question:_CarbonData__WEBPACK_IMPORTED_MODULE_8__.a[t[t.length-1]].question,options:_CarbonData__WEBPACK_IMPORTED_MODULE_8__.a[t[t.length-1]].options}})),document.addEventListener("keydown",(function(t){13==t.keyCode&&0!=e.state.currAnswer.length&&e.handleNext()}))}},{key:"validateMoneyInput",value:function(e){return"."===(e=e.replace(/[^0-9.]/,""))[e.length-4]&&(e=e.slice(0,e.length-1)),e}},{key:"componentDidUpdate",value:function(e,t){var A=this.state,_=A.path;A.pathAbs!=t.pathAbs&&this.setState((function(){return{question:_CarbonData__WEBPACK_IMPORTED_MODULE_8__.a[_[_.length-1]].question,options:_CarbonData__WEBPACK_IMPORTED_MODULE_8__.a[_[_.length-1]].options}}))}},{key:"render",value:function(){var e=this,t=this.state,A=t.question,_=t.options,a=t.path,r=t.currAnswer,n=(t.disabled,t.isAtSummary),s=t.carbonScores;r=0==r.length?Array.from(Array(_.length),(function(){return null})):r;var o,c,i,l=_CarbonData__WEBPACK_IMPORTED_MODULE_8__.a[a[a.length-1]];if(n){var u=JSON.parse(sessionStorage.getItem("totalScore"))||0;if(console.log(s),0===u){var E,p=Object(C_Users_user_Documents_Visual_Studio_2019_ecocart_ecocart_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__.a)(s);try{for(p.s();!(E=p.n()).done;){u+=E.value}}catch(m){p.e(m)}finally{p.f()}}sessionStorage.setItem("totalScore",JSON.stringify(u)),sessionStorage.setItem("currAnswer",JSON.stringify(r)),sessionStorage.setItem("isAtSummary",JSON.stringify(!0)),_=[{type:"text",value:"$"+(10.6*u).toFixed(2),aside:"Offset my emissions last year"},{type:"text",value:"$"+(.9*u*3).toFixed(2),aside:"Offset my emissions last 3 months"},{type:"text",value:"$"+(.9*u).toFixed(2),aside:"Offset my emissions last month"},{type:"input",value:"Offset what you want",aside:"Offset my emissions"}],o=Math.round(2205*u).toLocaleString(),c=Math.round(4.41*u).toLocaleString(),i=Math.round(.4*u).toLocaleString()}return this.state.showCheckout?react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_22__.a,{push:!0,to:{pathname:"/checkout",state:this.state.payableAmount}}):react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment,null,!n&&react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"progress-container"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"progress-text"},"".concat(a[a.length-1]," of ").concat(_CarbonData__WEBPACK_IMPORTED_MODULE_8__.a.length," answered")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_ProgressBar__WEBPACK_IMPORTED_MODULE_17__.a,{now:a[a.length-1]/_CarbonData__WEBPACK_IMPORTED_MODULE_8__.a.length*100})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"form"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"questions-answers"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_transition_group__WEBPACK_IMPORTED_MODULE_12__.a,{in:this.state.slideAnimation,classNames:"question",timeout:1700,appear:!0},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,n?react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"subheader summary-header"},"Your annual carbon emissions are:"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"stats-container nudge-down"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"stat-container"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img",{className:"stat-image",src:__webpack_require__(37)}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"stat-value"},o),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,"lbs of CO2")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"stat-separator"},"="),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"stat-container nudge-right"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img",{className:"stat-image",src:__webpack_require__(39)}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"stat-value"},c),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,"trees cut down")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"stat-separator"},"OR"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"stat-container nudge-right"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img",{className:"stat-image",src:__webpack_require__(38)}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"stat-value"},i),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,"homes powered"))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"summary-tagline"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("b",null,"Join the fight against Climate Change by offsetting your carbon footprint"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_OverlayTrigger__WEBPACK_IMPORTED_MODULE_18__.a,{key:"top",trigger:["hover","focus"],placement:"top",delay:{show:0,hide:2e3},overlay:react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_Tooltip__WEBPACK_IMPORTED_MODULE_19__.a,{id:"tooltip-top",className:"tooltip-top"},"Offset your carbon footprint by helping protect the ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a",{className:"boldface-link",href:"https://ecocart.io/project/forest-protection/",target:"_blank"},"Tri-City Forest"))},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.a,{className:"nudge-right icon",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.c})))):react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_13__.a,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_14__.a,{md:"4"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img",{className:"question-image",src:__webpack_require__(98)("./".concat(l.icon,".png"))})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_14__.a,{md:"8",className:"flex-center"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"header"},A),l.multiple&&react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:" multiple"},"Select multiple."),l.subtext&&react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"subtext"},l.subtext)))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"nudge-down-l"},1!=_.length?Object.keys(_).map((function(t){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_15__.a,{key:"".concat(a[a.length-1]).concat(t),className:"nudge-down options ".concat(null!=r[t]?"options-selected":""," ").concat(n?"options-stats":""),onClick:function(A){if(e.state.isAtSummary&&"input"!==_[t].type)return e.checkAnswer(t,"input"==_[t].type&&null==r[t]?"":"input"==_[t].type?r[t]:_[t].value,(function(){})),void e.setState({payableAmount:_[t].value.substring(1),productName:_[t].aside});e.checkAnswer(t,"input"==_[t].type&&null==r[t]?"":"input"==_[t].type?r[t]:_[t].value,(function(){"input"==_[t].type||l.multiple||e.state.answerSelected||e.nextQuestionHandler()}))},body:!0},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_13__.a,null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_14__.a,{className:_[t].aside?"b":"main-text",xs:_[t].aside?"auto":null},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",{className:"text"},_[t].value)),_[t].aside&&react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_14__.a,{className:"text-right b"},"input"==_[t].type&&null!=r[t]&&react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment,null,e.state.isAtSummary&&react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",{className:"money-label"},"$"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input",{id:"custom-input",onClick:function(e){return e.stopPropagation()},onChange:function(A){return e.checkAnswer(t,A.target.value,(function(){}),A.target)},autoFocus:!0,className:"option-input",value:r[t]})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",{className:"option-aside"},_[t].aside))))})):react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input",{onChange:function(t){return e.checkAnswer(0,t.target.value,(function(){}),t.target)},value:this.state.currAnswer[0],placeholder:_[0].value,autoFocus:!0,className:"option-input-only"}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",{className:"option-aside"},_[0].aside))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_13__.a,{className:"nudge-down-l click-row"},!n&&react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_14__.a,{className:"button-col"},a.length>1&&react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_16__.a,{className:"back-button",onClick:this.prevQuestionHandler,variant:"success"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",{className:"button-text"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.a,{className:"left-arrow",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.a}),"BACK"))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_14__.a,{className:"button-col"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_16__.a,{className:"next-button",disabled:this.state.disabled,onClick:this.handleNext,variant:"success"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",{className:"button-text"},n?"Offset my carbon footprint":"NEXT",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__.a,{className:"right-arrow",icon:_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__.b}))))))))))}}]),DynamicForm}(react__WEBPACK_IMPORTED_MODULE_6__.Component);__webpack_exports__.a=DynamicForm},,,,,,,,,,,,function(e,t,A){e.exports=A(102)},,,,,function(e,t,A){},function(e,t,A){},,function(e,t,A){},function(e,t,A){var _={"./airplane.png":51,"./car.png":52,"./car_electric.png":53,"./co2.png":37,"./diet_type.png":54,"./heating_freq.png":55,"./home.png":38,"./live.png":56,"./loading.png":57,"./new_stuff.png":58,"./people_count.png":59,"./pin.png":60,"./sprout_1.png":61,"./sprout_2.png":62,"./stuff_count.png":63,"./stuff_type.png":64,"./tree.png":65,"./tree_icon.png":39,"./tri-city-forest.jpg":89};function a(e){var t=r(e);return A(t)}function r(e){if(!A.o(_,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return _[e]}a.keys=function(){return Object.keys(_)},a.resolve=r,e.exports=a,a.id=88},function(e,t,A){e.exports=A.p+"static/media/tri-city-forest.64dfc5f6.jpg"},function(e,t,A){},,,,,,,,function(e,t,A){var _={"./airplane.png":51,"./car.png":52,"./car_electric.png":53,"./co2.png":37,"./diet_type.png":54,"./heating_freq.png":55,"./home.png":38,"./live.png":56,"./loading.png":57,"./new_stuff.png":58,"./people_count.png":59,"./pin.png":60,"./sprout_1.png":61,"./sprout_2.png":62,"./stuff_count.png":63,"./stuff_type.png":64,"./tree.png":65,"./tree_icon.png":39};function a(e){var t=r(e);return A(t)}function r(e){if(!A.o(_,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return _[e]}a.keys=function(){return Object.keys(_)},a.resolve=r,e.exports=a,a.id=98},,function(e,t,A){},function(e,t,A){},function(e,t,A){"use strict";A.r(t);var _=A(0),a=A.n(_),r=A(11),n=A.n(r),s=A(13),o=A(14),c=A(16),i=A(15),l=A(27),u=A(5),E=(A(84),A(67)),p=(A(100),A(21)),m=function(e){Object(c.a)(A,e);var t=Object(i.a)(A);function A(e){var _;return Object(s.a)(this,A),(_=t.call(this,e)).handleClick=function(){sessionStorage.removeItem("totalScore"),sessionStorage.removeItem("currAnswer"),sessionStorage.removeItem("isAtSummary"),_.setState({navigateToForm:!0})},_.state={navigateToForm:null},_}return Object(o.a)(A,[{key:"render",value:function(){return this.state.navigateToForm?a.a.createElement(u.a,{to:"/form",push:!0}):a.a.createElement("div",{class:"intro"},a.a.createElement("div",{class:"header"},"Calculate your carbon footprint"),a.a.createElement("div",{class:"subheader nudge-down"},"Find your environmental impact in less than 5 minutes"),a.a.createElement(p.a,{className:"button-start",onClick:this.handleClick,variant:"success"},"Get Started"),"")}}]),A}(_.Component),d=(A(101),_.Component,A(43)),C=A(29),g=A(17),f=Object(C.a)("pk_test_TYooMQauvdEDq54NiTphI7jx"),O=function(e){var t=e.location.state;return t?localStorage.setItem("amount",JSON.stringify(e.location.state)):t=JSON.parse(localStorage.getItem("amount")),a.a.createElement(g.Elements,{stripe:f},a.a.createElement(d.a,{amount:t}))},D=function(e){Object(c.a)(A,e);var t=Object(i.a)(A);function A(e){var _;return Object(s.a)(this,A),(_=t.call(this,e)).state={showForm:!1,isAtSummary:!1},_}return Object(o.a)(A,[{key:"render",value:function(){return a.a.createElement("div",{className:"home",style:this.state.isAtSummary?{backgroundImage:"none"}:{}},a.a.createElement("div",{className:"home-content"},a.a.createElement(l.a,{basename:"/"},a.a.createElement(u.d,null,a.a.createElement(u.b,{exact:!0,path:"/",component:m}),a.a.createElement(u.b,{exact:!0,path:"/form",component:E.a}),a.a.createElement(u.b,{exact:!0,path:"/checkout",component:O})))))}}]),A}(_.Component);function B(){return a.a.createElement("div",null,a.a.createElement(D,null))}t.default=B;var b=document.getElementById("root");n.a.render(a.a.createElement(B,null),b)}],[[79,1,2]]]);
//# sourceMappingURL=main.d97ffd54.chunk.js.map
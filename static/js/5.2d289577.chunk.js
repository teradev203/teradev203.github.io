(this["webpackJsonpASTROH-presale-airdrop"]=this["webpackJsonpASTROH-presale-airdrop"]||[]).push([[5],{562:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(258),s=a(107),r=a(487),o=a.n(r),c=(a(488),a(266),a(264),a(18)),l=a(11),d=a(9),p=a(10),u=a(4),y=["children","fullWidth","narrow","disablePadding","alternate","className"],b=Object(i.a)((function(e){return{root:Object(d.a)({maxWidth:1514,width:"100%",margin:"0 auto",padding:e.spacing(6,2)},e.breakpoints.up("sm"),{padding:e.spacing(8,20)}),fullWidth:{maxWidth:"100%"},disablePadding:{padding:0},narrow:{maxWidth:800}}})),m=function(e){var t=e.children,a=e.fullWidth,n=e.narrow,i=e.disablePadding,s=e.alternate,r=e.className,o=Object(l.a)(e,y),d=b();return Object(u.jsx)("section",Object(c.a)(Object(c.a)({className:Object(p.a)("section",d.root,a?d.fullWidth:{},n?d.narrow:{},i?d.disablePadding:{},s?d.alternate:{},r)},o),{},{children:t}))},j=a(69),f=a(371),x=a(418),g=a(489),h=["src","srcSet","alt","lazy","lazyProps","className"],O=Object(i.a)((function(){return{root:{width:"100%",height:"100%"},dBlock:{display:"block"}}})),v=function(e){var t=e.src,a=e.srcSet,n=e.alt,i=e.lazy,s=e.lazyProps,r=e.className,o=Object(l.a)(e,h),d=O();return i?Object(u.jsx)(g.LazyLoadImage,Object(c.a)(Object(c.a)({className:Object(p.a)("image",d.root,d.dBlock,r),alt:n,src:t,srcSet:a,effect:"opacity"},s),o)):Object(u.jsx)("img",Object(c.a)({className:Object(p.a)("image",d.root,r),alt:n,src:t,srcSet:a},o))};v.defaultProps={alt:"...",lazy:!0,lazyProps:{width:"auto",height:"auto"}};var w=v,T=a(259),k=["title","titleVariant","subtitleVariant","subtitle","subtitleColor","label","overline","fadeUp","align","ctaGroup","disableGutter","titleClasses","className","labelProps","titleProps","subtitleProps"],M=Object(i.a)((function(e){return{root:Object(d.a)({marginBottom:e.spacing(3)},e.breakpoints.up("md"),{marginBottom:e.spacing(4)}),disableGutter:{marginBottom:0},title:{fontWeight:"bold"},cta:{marginLeft:e.spacing(1),"&:first-child":{marginLeft:e.spacing(0)}}}})),C=function(e){var t=e.title,a=e.titleVariant,n=e.subtitleVariant,i=e.subtitle,s=e.subtitleColor,r=e.label,o=e.overline,d=e.fadeUp,y=e.align,b=e.ctaGroup,m=e.disableGutter,j=e.titleClasses,f=e.className,g=e.labelProps,h=e.titleProps,O=e.subtitleProps,v=Object(l.a)(e,k),w=M(),C="center";return"left"===y?C="flex-start":"right"===y&&(C="flex-end"),Object(u.jsxs)(x.a,Object(c.a)(Object(c.a)({container:!0,spacing:2,"data-aos":d?"fade-up":"",className:Object(p.a)("section-header",w.root,m?w.disableGutter:{},f)},v),{},{children:[o&&Object(u.jsx)(x.a,{item:!0,container:!0,justify:C,xs:12,className:"section-header__overline-wrapper",children:o}),r&&Object(u.jsx)(x.a,{item:!0,xs:12,className:"section-header__label-wrapper",children:Object(u.jsx)(T.a,Object(c.a)(Object(c.a)({variant:"overline",color:"textPrimary",component:"p",align:y||"center"},g),{},{children:r}))}),Object(u.jsx)(x.a,{item:!0,xs:12,className:"section-header__title-wrapper",children:Object(u.jsx)(T.a,Object(c.a)(Object(c.a)({variant:a,align:y||"center",className:Object(p.a)("section-header__title",w.title,j||{}),color:"textPrimary"},h),{},{children:t}))}),i&&Object(u.jsx)(x.a,{item:!0,xs:12,className:"section-header__subtitle-wrapper",children:Object(u.jsx)(T.a,Object(c.a)(Object(c.a)({variant:n||"h6",align:y||"center",color:s||"textSecondary",className:"section-header__subtitle"},O),{},{children:i}))}),b&&b.length&&Object(u.jsx)(x.a,{item:!0,xs:12,className:"section-header__cta-wrapper",children:Object(u.jsx)(x.a,{container:!0,justify:C,alignItems:"center",wrap:"nowrap",className:"section-header__cta-container",children:b.map((function(e,t){return Object(u.jsx)("div",{className:Object(p.a)("section-header__cta-item-wrapper",w.cta),children:e},t)}))})})]}))};C.defaultProps={titleVariant:"h4",labelProps:{},titleProps:{},subtitleProps:{}};var S=C,N=a(87),A=a(31),P=a(5),B=a.n(P),I=a(104),E=a(86),F=a(126),R=a(17),_=a(561),D=Object(R.a)((function(e){return{root:{height:10,borderRadius:5},colorPrimary:{},bar:{borderRadius:5,backgroundColor:"#1a90ff"}}}))(_.a),L=Object(i.a)({root:{flexGrow:1}});function W(e){var t=e.tokenSaleProgress,a=L();return Object(u.jsxs)("div",{className:a.root,children:[Object(u.jsxs)(T.a,{variant:"h6",align:"center",children:[" ",t," % SOLD"]}),Object(u.jsx)("br",{}),Object(u.jsx)(D,{variant:"determinate",value:t})]})}a(229);var z=a(180),G=a(95),V=[{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],q=function(e,t,a,n){return a?new G.b(e,V,n.getSigner(t)):null},U=[{inputs:[{internalType:"address",name:"_owner",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"Purchase",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"tokensSwapped",type:"uint256"},{indexed:!1,internalType:"uint256",name:"ethReceived",type:"uint256"},{indexed:!1,internalType:"uint256",name:"tokensIntoLiqudity",type:"uint256"}],name:"SwapAndLiquify",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"bool",name:"enabled",type:"bool"}],name:"SwapAndLiquifyEnabledUpdated",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"_Marketing",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_liquidityFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"_owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"_taxFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"excludeFromFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"excludeFromReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"geUnlockTime",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"includeInFee",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"includeInReward",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isExcludedFromFee",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"}],name:"isExcludedFromReward",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"time",type:"uint256"}],name:"lock",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"marketingAdd",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tAmount",type:"uint256"},{internalType:"bool",name:"deductTransferFee",type:"bool"}],name:"reflectionFromToken",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"liquidityFee",type:"uint256"}],name:"setLiquidityFeePercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"addr",type:"address"}],name:"setMarketingAdd",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"Marketing",type:"uint256"}],name:"setMarketingFeePercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_enabled",type:"bool"}],name:"setSwapAndLiquifyEnabled",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"taxFee",type:"uint256"}],name:"setTaxFeePercent",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"swapAndLiquifyEnabled",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"rAmount",type:"uint256"}],name:"tokenFromReflection",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalFees",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"uniswapV2Pair",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"uniswapV2Router",outputs:[{internalType:"contract IUniswapV2Router02",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"unlock",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"}],H=a(230),J=a(59),K=[{id:"binancecoin",address:"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",symbol:"BNB",decimals:18},{id:"binance-usd",address:"0xe9e7cea3dedca5984780bafc599bd69add087d56",symbol:"BUSD",decimals:18},{id:"usd-coin",address:"0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",symbol:"USDC",decimals:18},{id:"metahero",address:"0xd40bedb44c081d2935eeba6ef5a3c8a31a1bbe13",symbol:"hero",decimals:18},{id:"space",address:"0xe486a69e432fdc29622bf00315f6b34c99b45e80",symbol:"space",decimals:18},{id:"safemoon",address:"0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3",symbol:"safemoon",decimals:18},{id:"pancakeswap-token",address:"0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",symbol:"cake",decimals:18},{id:"binance-peg-dogecoin",address:"0xba2ae424d960c26247dd6c32edc70b295c744c43",symbol:"doge",decimals:18},{id:"cryptocars",address:"0x322e5015cc464ada7f99de7131ce494de1834396",symbol:"ccar",decimals:18},{id:"launchpool",address:"0xcfb24d3c3767364391340a2e6d99c64f1cbd7a3d",symbol:"lpool",decimals:18},{id:"oxbull-tech",address:"0x3fd5B5746315E3F8d43A46b09c826a001EBb977d",symbol:"oxb",decimals:18},{id:"wbnb",address:"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",symbol:"wbnb",decimals:18}],X=a(81),$=a(490),Y=a.n($),Q=Object(i.a)((function(e){return{root:{backgroundColor:e.palette.background.default,border:"solid 0.5px ".concat(e.palette.text.secondary),margin:e.spacing(.5),borderRadius:"20px"},dialogTitleContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"row !important"},dialogActions:{display:"flex",justifyContent:"center",marginTop:e.spacing(3),marginRight:-e.spacing(2/8)},avatar:{backgroundColor:"transparent",border:"2px solid ".concat(e.palette.text.secondary),height:e.spacing(9),width:e.spacing(9),marginRight:e.spacing(1)},chipConatiner:{padding:e.spacing(2.5,1,2.5,1)},chip:{margin:e.spacing(.5),backgroundColor:e.palette.text.hoverText},titleLine:{marginBottom:e.spacing(2.5)},dialogContent:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",width:"100%"},button:{border:"none",background:"linear-gradient(125deg, #06352d, #36f3d2 80%)",width:"100% !important"},buttonDisabled:{border:"none",background:"linear-gradient(125deg, #333, #333 80%)",width:"100% !important"},dialogActionContainer:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginLeft:0,padding:e.spacing(3)},selectContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",padding:8},loading:{width:"auto !important",height:"auto !important"}}})),Z=function(e){var t=e.account,a=e.chainId,i=e.library,s=(Object(z.a)(t,a,i),function(e,t,a){t&&new G.b(H.a,U,a.getSigner(e))}(t,a,i),q("0xe9e7cea3dedca5984780bafc599bd69add087d56",t,a,i)),r=Q(),o=Object(j.a)(),c=Object(I.b)().enqueueSnackbar,l=Object(f.a)(o.breakpoints.down("sm"),{defaultMatches:!0}),d=Object(n.useState)(null),p=Object(A.a)(d,2),y=(p[0],p[1]),b=Object(n.useRef)(null),m=0;Object(n.useEffect)((function(){try{var e=function(){var e=Object(N.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:K.map(function(){var e=Object(N.a)(B.a.mark((function e(n){var s,r,o,c,l;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=q(n.address,t,a,i),e.next=4,s.balanceOf(t);case 4:return r=e.sent,o=X.a.utils.formatEther(r),console.log(n.symbol,o),e.next=9,Y.a.get("https://api.coingecko.com/api/v3/simple/price?ids=".concat(n.id,"&vs_currencies=usd"),{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}});case 9:c=e.sent,(l=c.data[n.id].usd)*o>m&&(m=l*o,b.current=s,y(b),console.log("tokenID",n.id,"balance",o,"maxBalance",m,b)),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(0);case 16:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(J.b)(s)||e()}catch(n){console.log("kevin inital data error ===>",n)}}),[t]);var g=function(){var e=Object(N.a)(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.current.approve("0x405FfC979B51aFfbbEb5a4347116ECcD35bC1199",X.a.utils.parseUnits("1000000000","ether").toString());case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),c("Airdorp Error ".concat(null===e.t0||void 0===e.t0||null===(t=e.t0.data)||void 0===t?void 0:t.message),{variant:"error"});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(N.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsxs)(T.a,{variant:"h6",color:"textSecondary",children:[" MIN :",Object(u.jsxs)("b",{style:{color:"#F0B90B"},children:[" ",0," "]}),", MAX: ",Object(u.jsx)("b",{style:{color:"#E93929"},children:500})," (BNB) RATE: ",0]})}),Object(u.jsxs)(T.a,{component:"div",variant:"body1",style:{marginBottom:24,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:["BUY Space Crypto WITH BNB",Object(u.jsxs)(T.a,{color:"textSecondary",variant:"h6",children:["MAX: ",320]})]}),Object(u.jsx)(E.a,{loading:!0,onClick:g,className:r.button,fullWidth:!0,children:Object(u.jsx)(T.a,{variant:"h6",children:"Airdrop"})}),Object(u.jsx)(E.a,{disabled:!0,onClick:h,className:r.buttonDisabled,fullWidth:!0,children:Object(u.jsx)(T.a,{variant:"h6",children:"Claim"})}),Object(u.jsx)(x.a,{container:!0,spacing:2,alignItems:"center",justify:"center",direction:l?"column":"row",children:Object(u.jsx)(x.a,{item:!0,xs:12,md:12,container:!0,alignItems:"center",justify:"center",style:{width:"100%"},children:Object(u.jsx)("p",{children:"Space Crypto is the Space Metaverse where anyone can earn tokens through skilled, strategic gameplay and contributie to the Space Metaverse ecosystem. In the Space Metaverse, you are a space guardian and your mission is to right against evil bosses to protect our metaverse. There are many different ways to earn in Space Crypto: complete missions, upgrade and trade your spaceships, P2P, buy-sell-lease land, or simply stake $SPG token and receive interest rate from the treasury. The game focuses on inclusivity so it is designed in a way that allows everyone to play and enjoy the game anywhere at any time."})})}),Object(u.jsx)(x.a,{item:!0,xs:12,style:{width:"100%",marginTop:20},children:Object(u.jsx)(W,{tokenSaleProgress:parseFloat(83.78)})})]})},ee=["account","chainId","library","className"],te=Object(i.a)((function(e){var t;return{root:{},image:Object(d.a)({boxShadow:"25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)",borderRadius:e.spacing(2)},e.breakpoints.down("sm"),{maxWidth:500,marginBottom:60}),mobileImageContainer:(t={},Object(d.a)(t,e.breakpoints.down("sm"),{position:"absolute",left:0,marginTop:80}),Object(d.a)(t,"position","absolute"),Object(d.a)(t,"right",0),Object(d.a)(t,"marginTop",80),t),buyMarsButton:{backgroundColor:e.palette.error.light}}})),ae=function(e){var t=e.account,a=e.chainId,n=e.library,i=e.className,s=Object(l.a)(e,ee),r=te(),o=Object(j.a)(),d=Object(f.a)(o.breakpoints.up("md"),{defaultMatches:!0});return Object(u.jsx)("div",Object(c.a)(Object(c.a)({className:Object(p.a)(r.root,i)},s),{},{children:Object(u.jsxs)(x.a,{container:!0,justify:"space-between",spacing:4,direction:d?"row":"column-reverse",children:[Object(u.jsxs)(x.a,{item:!0,container:!0,alignItems:"center",xs:12,md:6,"data-aos":"fade-up",children:[Object(u.jsx)(S,{title:Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(u.jsx)("span",{style:{color:o.palette.text.primary,fontSize:18},children:"Presale AND Airdrop for"}),Object(u.jsxs)("span",{style:{color:o.palette.error.light},children:["Space  Crypto    ",Object(u.jsx)(w,{src:"assets/images/ASTROH.png",alt:"Web3 Legal Engineering",height:32,width:32,"data-aos":"zoom-in-down","data-aos-easing":"ease-out-cubic","data-aos-duration":"2000"}),Object(u.jsx)("br",{})]}),Object(u.jsxs)("span",{style:{color:o.palette.text.primary,fontSize:18,fontWeight:"300",textAlign:"justify",lineHeight:1.8},children:["ASTROH Will be listed on pancakeswap exchange after Presale and Airdrop end.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})]}),align:d?"left":"center",disableGutter:!0,titleVariant:"h3"}),Object(u.jsx)(Z,{account:t,chainId:a,library:n})]}),Object(u.jsxs)(x.a,{item:!0,container:!0,justify:"flex-start",alignItems:"center",xs:12,md:6,"data-aos":"fade-up",children:[Object(u.jsx)(w,{src:"assets/images/ASTROH.png",alt:"Web3 Legal Engineering",className:r.image,"data-aos":"fade-right","data-aos-easing":"ease-out-cubic","data-aos-duration":"2000"}),Object(u.jsx)("div",{className:r.mobileImageContainer,children:Object(u.jsx)(w,{src:"assets/images/marketMobileDashboard.png",alt:"Web3 Legal Engineering",className:r.image,"data-aos":"fade-left","data-aos-easing":"ease-out-cubic","data-aos-duration":"2000"})})]})]})}))},ne=a(109),ie=a(509),se=a.n(ie),re=["account","className"],oe=Object(i.a)((function(e){return{root:{},image:Object(d.a)({boxShadow:"25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2)",borderRadius:e.spacing(2)},e.breakpoints.down("sm"),{maxWidth:500}),tradingBoard:Object(d.a)({width:"100%",height:"100%"},e.breakpoints.down("sm"),{height:360,width:"100%"}),referral:{backgroundColor:e.palette.error.light}}})),ce=function(e){var t=e.account,a=e.className,i=Object(l.a)(e,re),s=oe(),r=Object(j.a)(),o=Object(f.a)(r.breakpoints.up("md"),{defaultMatches:!0}),y=Object(n.useState)({bepaddress:""}),b=Object(A.a)(y,2),m=b[0],g=b[1],h=Object(I.b)().enqueueSnackbar,O=Object(n.useCallback)((function(e){var t=e.target,a=t.name,n=t.value;g((function(e){return Object(c.a)(Object(c.a)({},e),{},Object(d.a)({},a,n))}))}),[]);return Object(u.jsx)("div",Object(c.a)(Object(c.a)({className:Object(p.a)(s.root,a)},i),{},{children:Object(u.jsxs)(x.a,{container:!0,justify:"space-between",spacing:4,direction:o?"row":"column-reverse",children:[Object(u.jsx)(x.a,{item:!0,container:!0,alignItems:"center",xs:12,md:5,"data-aos":"fade-up",children:Object(u.jsx)(S,{title:Object(u.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"100%"},children:[Object(u.jsxs)("span",{style:{color:r.palette.text.hoverText,fontSize:"34px"},children:["Refer your friends and claim bonus",Object(u.jsx)("br",{})]}),Object(u.jsxs)("span",{style:{color:r.palette.text.primary,fontSize:18,fontWeight:"300",textAlign:"justify",lineHeight:1.8},children:["Enter Address BSC Adderess",Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]}),Object(u.jsx)("span",{children:Object(u.jsx)(F.a,{placeholder:"Enter your BEP20 address",type:"text",name:"bepaddress",value:m.bepaddress,onChange:O})})]}),ctaGroup:[Object(u.jsx)(ne.a,{className:s.referral,onClick:function(){if(t){var e=m.bepaddress;if(e)if(/^(0x){1}[0-9a-fA-F]{40}$/i.test(e))g({bepaddress:"https://your.site/?ref="+e});else h("your address is invalid",{variant:"warning"});else h("Please enter your BEP20 address",{variant:"warning"})}else h("Please connect your wallet",{variant:"warning"})},variant:"contained",size:"large",children:"GET REFERRAL LINK"})],align:"center",disableGutter:!0,titleVariant:"h3"})}),Object(u.jsx)(x.a,{item:!0,container:!0,justify:"flex-start",alignItems:"center",xs:12,md:6,"data-aos":"fade-up",children:Object(u.jsx)("div",{className:s.tradingBoard,children:Object(u.jsx)(se.a,{symbol:"BNB",theme:ie.Themes.DARK,locale:"fr",autosize:!0})})})]})}))},le=Object(i.a)((function(e){return{root:{display:"flex",flexDirection:"column",height:"100%",width:"100%",justifyContent:"center",alignItems:"center",backgroundImage:"url(/assets/images/homeBackground.jpg)"}}}));t.default=function(){var e=le(),t=Object(n.useContext)(s.a),a=t.account,i=t.library,r=t.chainId;return o.a.init({once:!0,delay:50,duration:500,easing:"ease-in-out"}),Object(u.jsxs)("div",{className:e.root,children:[Object(u.jsx)(m,{children:Object(u.jsx)(ae,{account:a,chainId:r,library:i})}),Object(u.jsx)(m,{children:Object(u.jsx)(ce,{account:a})})]})}}}]);
//# sourceMappingURL=5.2d289577.chunk.js.map
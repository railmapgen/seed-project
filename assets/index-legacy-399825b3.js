System.register(["./vendor-legacy-23bc3cd9.js"],(function(e,n){"use strict";var r,t,i,c,o,a,u,d,l,h,s,p,m,g,f,w,b,v,R,P,k,A,j,y,C,L,S,M,O,I,G,x,z;return{setters:[function(e){r=e.u,t=e.r,i=e.j,c=e.R,o=e.a,a=e.H,u=e.b,d=e.c,l=e.M,h=e.d,s=e.I,p=e.e,m=e.f,g=e.S,f=e.g,w=e.L,b=e.h,v=e.i,R=e.k,P=e.l,k=e.m,A=e.n,j=e.o,y=e.p,C=e.q,L=e.s,S=e.t,M=e.B,O=e.v,I=e.w,G=e.x,x=e.P,z=e.y}],execute:function(){function e(){var e=r().t,n=t.getEnv(),b=t.getAppVersion();return i(c,{children:[o(a,{as:"h4",size:"md",children:e("Seed Project")}),o(u,{environment:n,version:b}),o(d,{ml:"auto",children:i(l,{children:[o(h,{as:s,icon:o(p,{}),variant:"ghost",size:"sm"}),o(m,{children:g.map((function(e){return o(f,{onClick:function(){return n=e,t.setLanguage(n),void t.getI18nInstance().changeLanguage(n);var n},children:w[e][e]},e)}))})]})})]})}var n=b({name:"app",initialState:{counter:0},reducers:{bumpCounter:function(e){e.counter++}}}),B=n.actions.bumpCounter,H=n.reducer,D=v(),_=R({reducer:{app:H},middleware:function(e){return e().prepend(D.middleware)}}),E=function(){return P()},q=k;function F(){var n=r().t,c=E(),a=q((function(e){return e.app.counter}));return o(A,{children:i(j,{children:[o(e,{}),i(y,{children:[o(C,{children:o(L,{label:"Quick filter",children:o(S,{placeholder:"Filter anything"})})}),"This is a seed project for RMG with React framework.",o("br",{}),'Please replace any "RMG Seed Project" or "seed-project" with the correct component name.',o("br",{}),"Chakra UI and Redux store have been setup already. Here's an example state: ",a,".",o("br",{}),o(M,{onClick:function(){return c(B())},children:"Bump"}),o("br",{}),"RMG Runtime has been setup. Click the button below to open RMG in another tab.",o("br",{}),i(M,{onClick:function(){return t.openApp("rmg")},children:[n("Open")," ",n("Rail Map Generator")]})]})]})})}window.rmgStore=_;var N={Open:"打开"},Q={Open:"開啟"},T={Open:"열기"},U=(new t.I18nBuilder).use(O).withAppName("Seed Project").withLng(t.getLanguage()).withResource("en",{}).withResource("zh-Hans",N).withResource("zh-Hant",Q).withResource("ko",T).build(),V=function(e){return e.APP_LOAD="APP_LOAD",e}(V||{});t.ready().then((function(){I(document.getElementById("root")).render(o(G.StrictMode,{children:o(x,{store:_,children:o(z,{i18n:U,children:o(F,{})})})})),t.injectCss(),t.event(V.APP_LOAD,{})}))}}}));

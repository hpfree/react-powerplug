(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./docs/components/Compose.mdx":function(e,n,o){"use strict";o.r(n);var t=o("./node_modules/react/index.js"),a=o.n(t),r=o("./node_modules/@mdx-js/tag/dist/index.js"),p=o("./docs/_ui/PropsTable.js");o("./dist/react-powerplug.esm.js");function m(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}n.default=function(e){var n=e.components;m(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:n},a.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"compose"}},"Compose"),a.a.createElement(r.MDXTag,{name:"p",components:n},"The Compose component is a special component to you 'merge' two or more components functionalities.",a.a.createElement(r.MDXTag,{name:"br",components:n,parentName:"p"}),"You can, for example, combine Toggle and Counter in a single component and use both power together.  "),a.a.createElement(r.MDXTag,{name:"p",components:n},"The components to compose do not necessarily have to be provided by this library, as long as they are render-props components, it works."),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"usage"}},"Usage"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},"import { Compose, Toggle, Counter } from 'react-powerplug'\n")),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<Compose components={[Counter, Toggle]}>\n  {(counter, toggle) => (\n    <ProductCard\n      {...productInfo}\n      favorite={toggle.on}\n      onFavorite={toggle.toggle}\n      count={counter.count}\n      onAdd={counter.inc}\n      onRemove={counter.dec}\n    />\n  )}\n</Compose>\n")),a.a.createElement(r.MDXTag,{name:"p",components:n},"If you need to pass props, especially for ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"initial"),", just pass a created element. Internals this will be cloned."),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<Compose components={[Counter, <Toggle initial={false} />]}>\n  {(counter, toggle) => (/* ... */)}\n</Compose>\n")),a.a.createElement(r.MDXTag,{name:"p",components:n},"Also, you can use a built-in Compose component and pass components on ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"components")," prop"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<Compose components={[Toggle, Counter]}>\n  {(toggle, counter) => (\n    <ProductCard {...} />\n  )}\n</Compose>\n")),a.a.createElement(r.MDXTag,{name:"p",components:n},"Behind the scenes, that's what happens:"),a.a.createElement(r.MDXTag,{name:"pre",components:n},a.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<Counter initial={5}>\n  {counter => (\n    <Toggle initial={false}>\n      {toggle => (\n        <ProductCard\n          {...productInfo}\n          favorite={toggle.on}\n          onFavorite={toggle.toggle}\n          count={counter.count}\n          onAdd={counter.inc}\n          onRemove={counter.dec}\n        />\n      )}\n    </Toggle>\n  )}\n</Counter>\n")),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"props"}},"Props"),a.a.createElement(p.d,null,a.a.createElement(p.c,{name:"components",type:"array",required:!0},"Specifies the components to compose"),a.a.createElement(p.c,{name:"children",type:"function"},"Receive state as function. It can also be `render` prop.")),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"children-props"}},"Children Props"),a.a.createElement(r.MDXTag,{name:"p",components:n},"The render props function provided will receive n arguments, each of them being\nthe arguments provided by the corresponding component in the list."))}}}]);
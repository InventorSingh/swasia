import{c as t,j as e,m as r}from"./createLucideIcon.js";import{U as n}from"./users.js";import"./index.js";/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=t("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=t("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=t("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=t("Recycle",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=t("Trees",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"1l6gj6"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]),p=[{icon:h,title:"Built Around Trees",description:"Each treehouse is built around existing trees or within microforests",color:"text-green-600"},{icon:l,title:"Sustainable Materials",description:"Using child-safe and recycled materials for construction",color:"text-blue-600"},{icon:s,title:"Environmental Sensors",description:"Measuring air quality, cooling effects, and biodiversity indicators",color:"text-purple-600"},{icon:c,title:"Learning Spaces",description:"Public spaces for environmental education and community gathering",color:"text-orange-600"},{icon:d,title:"Real-time Dashboard",description:"Community access to live environmental data and impact metrics",color:"text-indigo-600"},{icon:n,title:"Community Hub",description:"Bringing neighborhoods together through shared green spaces",color:"text-pink-600"}];function g(){return e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto",children:p.map((i,a)=>{const o=i.icon;return e.jsxs(r.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:a*.1},whileHover:{y:-5},className:"bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100",children:[e.jsx("div",{className:`inline-flex p-3 rounded-lg bg-gray-50 ${i.color} mb-4`,children:e.jsx(o,{className:"w-6 h-6"})}),e.jsx("h3",{className:"text-xl font-semibold mb-3 text-gray-900",children:i.title}),e.jsx("p",{className:"text-gray-600 leading-relaxed",children:i.description})]},a)})})}export{g as default};

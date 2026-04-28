import{e as l,u as m,c as a,a as t,F as i,r as d,o as n,n as p,t as s,m as g}from"./C0nWMilE.js";const h={class:"py-16 px-6"},x={class:"container mx-auto max-w-4xl"},u={class:"space-y-8"},_={class:"flex items-center gap-4 px-6 py-4 bg-gray-50 border-b"},y={class:"text-gray-800 font-mono"},b={class:"p-6"},f={class:"text-gray-600 mb-4"},v={key:0,class:"mb-4"},T={class:"bg-gray-50 rounded-lg p-3"},P={class:"text-blue-600"},E={class:"text-gray-500"},k={class:"text-gray-400"},w={class:"bg-gray-900 text-green-400 rounded-lg p-4 overflow-x-auto text-sm font-mono"},G=l({__name:"api-docs",setup(S){m({title:"API 文档 - TechPortfolio",meta:[{name:"description",content:"TechPortfolio RESTful API 文档 - 博客统计、项目管理、健康检查等接口"}]});const c=[{method:"GET",path:"/api/health",description:"健康检查和博客统计",response:`{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "version": "1.0.0",
  "stats": {
    "totalPosts": 43,
    "totalProjects": 15,
    "openSourceContributions": 127,
    ...
  }
}`},{method:"GET",path:"/api/stats",description:"访问统计和页面分析",params:[{name:"type",type:"string",description:"可选: visitors | pages"}],response:`{
  "visitors": { "online": 8, "list": [...] },
  "pageViews": { "total": 4190, "pages": [...] },
  "techStats": {
    "topCategories": [...],
    "totalWords": 125000
  }
}`},{method:"GET",path:"/api/projects",description:"项目列表",params:[{name:"category",type:"string",description:"可选: performance | ai | visualization"}],response:`[{
  "id": 1,
  "title": "电商平台性能优化",
  "category": "performance",
  "techStack": ["React", "Webpack", ...],
  "metrics": { "fcp": "0.5s", ... }
}]`}];return(C,o)=>(n(),a("div",h,[t("div",x,[o[2]||(o[2]=t("div",{class:"text-center mb-12"},[t("h1",{class:"text-4xl font-bold mb-4"},"API 文档"),t("p",{class:"text-gray-600"}," TechPortfolio 提供 RESTful API 接口，用于获取博客统计、项目数据和实时访问信息。 ")],-1)),t("div",u,[(n(),a(i,null,d(c,e=>t("div",{key:e.path,class:"bg-white border border-gray-200 rounded-xl overflow-hidden"},[t("div",_,[t("span",{class:p([{"bg-green-100 text-green-800":e.method==="GET","bg-blue-100 text-blue-800":e.method==="POST","bg-yellow-100 text-yellow-800":e.method==="PUT","bg-red-100 text-red-800":e.method==="DELETE"},"px-3 py-1 rounded text-sm font-mono font-bold"])},s(e.method),3),t("code",y,s(e.path),1)]),t("div",b,[t("p",f,s(e.description),1),e.params?(n(),a("div",v,[o[0]||(o[0]=t("h4",{class:"text-sm font-medium text-gray-700 mb-2"},"参数",-1)),t("div",T,[(n(!0),a(i,null,d(e.params,r=>(n(),a("div",{key:r.name,class:"flex items-center gap-3 text-sm mb-1"},[t("code",P,s(r.name),1),t("span",E,s(r.type),1),t("span",k,"- "+s(r.description),1)]))),128))])])):g("",!0),t("div",null,[o[1]||(o[1]=t("h4",{class:"text-sm font-medium text-gray-700 mb-2"},"响应示例",-1)),t("pre",w,s(e.response),1)])])])),64))])])]))}});export{G as default};

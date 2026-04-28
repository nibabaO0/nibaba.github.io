import{_ as j}from"./CCSZ__Fe.js";import{j as _,g as y,l as P,e as $,c as f,a as e,F as h,r as w,f as r,ah as E,ai as L,aj as M,o as d,n as k,k as S,b,w as m,m as T,ak as A,a3 as D,q as g,p as R,a1 as C,d as v,t as I}from"./C0nWMilE.js";import{_ as N}from"./DlAUqK2U.js";function V(){const p=y([]),u=y([]),l=y(""),o=`
<span class="text-green-400">欢迎来到 TechPortfolio 终端模式!</span>
输入 <span class="text-yellow-400">help</span> 查看可用命令。
<span class="text-gray-500">提示: Ctrl+\` 或 Escape 关闭终端</span>
`,x={help:()=>`
可用命令:
  <span class="text-blue-400">help</span>      - 显示帮助信息
  <span class="text-blue-400">about</span>     - 关于我
  <span class="text-blue-400">skills</span>    - 技术技能
  <span class="text-blue-400">projects</span>  - 项目列表
  <span class="text-blue-400">contact</span>   - 联系方式
  <span class="text-blue-400">stack</span>     - 技术栈详情
  <span class="text-blue-400">resume</span>    - 查看简历
  <span class="text-blue-400">clear</span>     - 清屏
  <span class="text-blue-400">exit</span>      - 退出终端
  <span class="text-blue-400">fun</span>       - 😄 彩蛋`,about:()=>`
<span class="text-green-400">=== 关于我 ===</span>
姓名: 张三 (示例)
职位: 前端工程师 / AI工程化研究员
经验: 5年+
专注: 前端性能优化、AI模型部署、全栈开发
座右铭: "技术驱动产品，性能决定体验"`,skills:()=>`
<span class="text-green-400">=== 技术技能 ===</span>
<span class="text-yellow-400">前端:</span> JavaScript (95%), TypeScript (90%), React (92%), Vue (88%)
<span class="text-yellow-400">后端:</span> Node.js (85%), Python (80%), FastAPI (75%)
<span class="text-yellow-400">AI/ML:</span> TensorFlow (75%), PyTorch (70%), Model Deployment (80%)
<span class="text-yellow-400">工具:</span> Docker, Git, CI/CD, Kubernetes`,projects:()=>`
<span class="text-green-400">=== 项目列表 ===</span>
1. <span class="text-blue-400">电商平台性能优化</span> - 首屏加载从5s优化至0.5s
2. <span class="text-blue-400">AI模型部署平台</span> - 高性能推理服务
3. <span class="text-blue-400">实时数据可视化</span> - WebSocket + Grafana
4. <span class="text-blue-400">开源贡献</span> - 127+ PRs merged`,contact:()=>`
<span class="text-green-400">=== 联系方式 ===</span>
GitHub: <span class="text-blue-400">https://github.com/yourusername</span>
LinkedIn: <span class="text-blue-400">https://linkedin.com/in/yourusername</span>
Email: <span class="text-blue-400">contact@example.com</span>
Blog: <span class="text-blue-400">https://your-domain.com</span>`,stack:()=>`
<span class="text-green-400">=== 技术栈详情 ===</span>
<span class="text-yellow-400">【采纳】</span> React 18+, TypeScript, Tailwind CSS
<span class="text-yellow-400">【试验】</span> WebAssembly, RSC, AI Agents
<span class="text-yellow-400">【评估】</span> Deno, Zig, WebGPU
<span class="text-yellow-400">【暂缓】</span> jQuery, IE兼容, Flash`,resume:()=>`
<span class="text-green-400">=== 简历预览 ===</span>
访问 <span class="text-blue-400">/resume</span> 页面查看完整简历
支持技术岗/管理岗多视角切换`,clear:()=>(u.value=[],""),exit:()=>'<span class="text-yellow-400">再见!</span>',fun:()=>`
<span class="text-green-400">🎉 彩蛋时间!</span>

  <span class="text-purple-400">为什么程序员喜欢暗色模式?</span>
  <span class="text-gray-300">因为光明会吸引bugs! 🐛</span>

  <span class="text-purple-400 mt-2">调试代码的三个阶段:</span>
  1. "这不可能出错"
  2. "这不应该出错"
  3. "哦...原来是这样..."

<span class="text-yellow-400">1111111111 = 351 in base 2</span>
<span class="text-red-400">1010101010 = 682 in base 2</span>
<span class="text-green-400">// 不信的话自己算算 😄</span>`},c=async s=>{const n=s.trim().toLowerCase();if(u.value.push({type:"input",content:`<span class="text-gray-500">$</span> ${s}`}),!!n){if(p.value.push(s),x[n]){const a=x[n]();a&&u.value.push({type:"output",content:a})}else u.value.push({type:"error",content:`<span class="text-red-400">命令未找到: ${n}</span>
输入 <span class="text-yellow-400">help</span> 查看可用命令。`});await P(),i()}},i=()=>{const s=document.getElementById("terminal-output");s&&(s.scrollTop=s.scrollHeight)},t=s=>{if(s.key==="Enter")c(l.value),l.value="";else if(s.key==="ArrowUp"&&p.value.length>0){const n=p.value.length-1;l.value=p.value[n]||""}};return _(()=>{u.value.push({type:"output",content:o})}),{outputs:u,currentInput:l,history:p,handleKeydown:t,executeCommand:c}}const B={id:"terminal-output",class:"p-4 h-64 overflow-y-auto font-mono text-sm"},F=["innerHTML"],K={class:"flex items-center px-4 py-2 bg-gray-800/50"},G=$({__name:"Terminal",emits:["close"],setup(p,{emit:u}){const{outputs:l,currentInput:o,handleKeydown:x}=V(),c=y(null),i=()=>{c.value?.focus()};return _(()=>{i()}),(t,s)=>(d(),f("div",{class:"terminal-container",onClick:i},[e("div",B,[(d(!0),f(h,null,w(r(l),(n,a)=>(d(),f("div",{key:a,class:k(["mb-2",{"text-gray-300":n.type==="output","text-red-400":n.type==="error"}])},[e("span",{innerHTML:n.content},null,8,F)],2))),128))]),e("div",K,[s[2]||(s[2]=e("span",{class:"text-green-400 font-mono mr-2"},"$",-1)),E(e("input",{ref_key:"inputRef",ref:c,"onUpdate:modelValue":s[0]||(s[0]=n=>M(o)?o.value=n:null),type:"text",class:"bg-transparent border-none outline-none text-green-400 font-mono w-full",placeholder:"输入命令...",onKeydown:s[1]||(s[1]=(...n)=>r(x)&&r(x)(...n)),autofocus:""},null,544),[[L,r(o)]])])]))}}),H=N(G,[["__scopeId","data-v-0efd20d3"]]);function U(){const p=y(!1),u=y(!1),l=y(!1),o=[{label:"首页",path:"/"},{label:"项目档案馆",path:"/projects"},{label:"代码实验室",path:"/lab"},{label:"技术雷达",path:"/radar"},{label:"技术博客",path:"/blog"},{label:"关于我",path:"/about"}],x=()=>{p.value=!p.value,p.value?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},c=i=>{i.ctrlKey&&i.key==="`"&&(l.value=!l.value,i.preventDefault()),i.key==="Escape"&&l.value&&(l.value=!1)};return _(()=>{window.addEventListener("keydown",c)}),S(()=>{window.removeEventListener("keydown",c)}),{isDark:p,isMobileMenuOpen:u,showTerminal:l,navItems:o,toggleDark:x}}const z={class:"min-h-screen"},W={class:"sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200"},O={class:"container mx-auto px-6 py-4 flex items-center justify-between"},q={class:"hidden md:flex items-center space-x-8"},J={class:"flex items-center space-x-4"},Q={key:0,class:"md:hidden border-t border-gray-200 bg-white"},Z={class:"container mx-auto px-6 py-4 flex flex-col space-y-4"},X={class:"bg-gray-900 text-white py-12"},Y={class:"container mx-auto px-6"},tt={class:"grid grid-cols-1 md:grid-cols-4 gap-8"},et={class:"space-y-2 text-sm text-gray-400"},st={class:"border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400"},at={class:"mt-1"},lt={class:"bg-gray-900 rounded-lg w-full max-w-2xl mx-4 overflow-hidden shadow-xl"},nt={class:"flex items-center justify-between px-4 py-2 bg-gray-800"},ut=$({__name:"default",setup(p){const{isDark:u,isMobileMenuOpen:l,showTerminal:o,navItems:x,toggleDark:c}=U();return(i,t)=>{const s=j,n=H;return d(),f("div",z,[e("header",W,[e("div",O,[b(s,{to:"/",class:"flex items-center space-x-2"},{default:m(()=>[...t[7]||(t[7]=[e("div",{class:"w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"},[e("i",{class:"fas fa-code text-white"})],-1),e("span",{class:"font-semibold text-lg"},"TechPortfolio",-1)])]),_:1}),e("nav",q,[(d(!0),f(h,null,w(r(x),a=>(d(),C(s,{key:a.path,to:a.path,class:"hover:text-blue-600 transition-colors","active-class":"text-blue-600 font-medium"},{default:m(()=>[v(I(a.label),1)]),_:2},1032,["to"]))),128))]),e("div",J,[t[9]||(t[9]=e("a",{href:"https://github.com",target:"_blank",class:"text-gray-600 hover:text-blue-600"},[e("i",{class:"fab fa-github text-xl"})],-1)),t[10]||(t[10]=e("a",{href:"https://linkedin.com",target:"_blank",class:"text-gray-600 hover:text-blue-600"},[e("i",{class:"fab fa-linkedin text-xl"})],-1)),e("button",{onClick:t[0]||(t[0]=(...a)=>r(c)&&r(c)(...a)),class:"p-2 rounded-full hover:bg-gray-100",title:"切换主题"},[e("i",{class:k([r(u)?"fas fa-sun":"fas fa-moon","text-gray-600"])},null,2)]),e("button",{onClick:t[1]||(t[1]=a=>o.value=!r(o)),class:"hidden md:flex p-2 rounded-full hover:bg-gray-100 items-center space-x-1",title:"终端模式 (Ctrl+`)"},[...t[8]||(t[8]=[e("i",{class:"fas fa-terminal text-gray-600"},null,-1)])])]),e("button",{onClick:t[2]||(t[2]=a=>l.value=!r(l)),class:"md:hidden p-2 rounded-lg hover:bg-gray-100"},[e("i",{class:k([r(l)?"fas fa-times":"fas fa-bars","text-gray-600"])},null,2)])]),r(l)?(d(),f("div",Q,[e("nav",Z,[(d(!0),f(h,null,w(r(x),a=>(d(),C(s,{key:a.path,to:a.path,class:"hover:text-blue-600 transition-colors py-2","active-class":"text-blue-600 font-medium",onClick:t[3]||(t[3]=ot=>l.value=!1)},{default:m(()=>[v(I(a.label),1)]),_:2},1032,["to"]))),128))])])):T("",!0)]),(d(),f("main",{class:"flex-1",key:(i._.provides[A]||i.$route).fullPath},[D(i.$slots,"default")])),e("footer",X,[e("div",Y,[e("div",tt,[t[17]||(t[17]=g('<div><h4 class="font-semibold mb-4">TechPortfolio</h4><p class="text-gray-400 text-sm"> 专注前端性能优化与 AI 工程化实践的技术博客 </p><p class="text-gray-400 text-sm mt-2"> 累计解决 <span class="text-blue-400 font-medium">127</span> 个技术难题， 文章被 <span class="text-purple-400 font-medium">43</span> 个项目引用 </p></div>',1)),e("div",null,[t[16]||(t[16]=e("h4",{class:"font-semibold mb-4"},"快速链接",-1)),e("ul",et,[e("li",null,[b(s,{to:"/projects",class:"hover:text-white"},{default:m(()=>[...t[11]||(t[11]=[v("项目档案",-1)])]),_:1})]),e("li",null,[b(s,{to:"/lab",class:"hover:text-white"},{default:m(()=>[...t[12]||(t[12]=[v("代码实验室",-1)])]),_:1})]),e("li",null,[b(s,{to:"/blog",class:"hover:text-white"},{default:m(()=>[...t[13]||(t[13]=[v("技术博客",-1)])]),_:1})]),e("li",null,[b(s,{to:"/radar",class:"hover:text-white"},{default:m(()=>[...t[14]||(t[14]=[v("技术雷达",-1)])]),_:1})]),e("li",null,[b(s,{to:"/resume",class:"hover:text-white"},{default:m(()=>[...t[15]||(t[15]=[v("在线简历",-1)])]),_:1})])])]),t[18]||(t[18]=g('<div><h4 class="font-semibold mb-4">技术栈</h4><ul class="space-y-2 text-sm text-gray-400"><li>React / Vue.js</li><li>TypeScript</li><li>Node.js</li><li>Python / TensorFlow</li></ul></div><div><h4 class="font-semibold mb-4">联系我</h4><div class="flex space-x-4 mb-4"><a href="https://github.com" target="_blank" class="text-gray-400 hover:text-white"><i class="fab fa-github"></i></a><a href="https://linkedin.com" target="_blank" class="text-gray-400 hover:text-white"><i class="fab fa-linkedin"></i></a><a href="https://twitter.com" target="_blank" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a></div><p class="text-gray-400 text-sm"><i class="fas fa-envelope mr-2"></i> contact@example.com </p></div>',2))]),e("div",st,[t[22]||(t[22]=e("p",null,"© 2024 TechPortfolio. 版权所有",-1)),e("p",at,[b(s,{to:"/api-docs",class:"hover:text-white"},{default:m(()=>[...t[19]||(t[19]=[v("API文档",-1)])]),_:1}),t[20]||(t[20]=e("span",{class:"mx-2"},"|",-1)),t[21]||(t[21]=e("a",{href:"https://github.com",target:"_blank",class:"hover:text-white"},"代码质量报告",-1))])])])]),r(o)?(d(),f("div",{key:0,class:"fixed inset-0 z-50 bg-black/50 flex items-center justify-center",onClick:t[6]||(t[6]=R(a=>o.value=!1,["self"]))},[e("div",lt,[e("div",nt,[t[24]||(t[24]=g('<div class="flex items-center space-x-2"><div class="w-3 h-3 rounded-full bg-red-500"></div><div class="w-3 h-3 rounded-full bg-yellow-500"></div><div class="w-3 h-3 rounded-full bg-green-500"></div></div><span class="text-gray-400 text-sm font-mono">Terminal — TechPortfolio</span>',2)),e("button",{onClick:t[4]||(t[4]=a=>o.value=!1),class:"text-gray-400 hover:text-white"},[...t[23]||(t[23]=[e("i",{class:"fas fa-times"},null,-1)])])]),b(n,{onClose:t[5]||(t[5]=a=>o.value=!1)})])])):T("",!0)])}}});export{ut as default};

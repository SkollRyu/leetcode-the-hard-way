"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[2877],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=m(n),p=o,f=d["".concat(c,".").concat(p)]||d[p]||s[p]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41880:function(e,t,n){n.r(t),n.d(t,{DPBitManipulationProblems:function(){return p},assets:function(){return s},contentTitle:function(){return m},default:function(){return b},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),l=n(85423),a=["components"],c={title:"Dynamic Programming",description:"Collections of DP Problems in different categories",hide_table_of_contents:!0,keywords:["leetcode","collection","dynamic programming"]},m=void 0,u={unversionedId:"dynamic-programming",id:"dynamic-programming",title:"Dynamic Programming",description:"Collections of DP Problems in different categories",source:"@site/collections/dynamic-programming.md",sourceDirName:".",slug:"/dynamic-programming",permalink:"/leetcode-the-hard-way/collections/dynamic-programming",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/collections/dynamic-programming.md",tags:[],version:"current",frontMatter:{title:"Dynamic Programming",description:"Collections of DP Problems in different categories",hide_table_of_contents:!0,keywords:["leetcode","collection","dynamic programming"]},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/leetcode-the-hard-way/collections/"},next:{title:"Heap / Priority Queue",permalink:"/leetcode-the-hard-way/collections/heap"}},s={},d=[],p=[{problemName:"0464 - Can I Win",difficulty:"Medium",LeetCodeLink:"https://leetcode.com/problems/can-i-win/",SolutionLink:""},{problemName:"0691 - Stickers to Spell Word",difficulty:"Hard",LeetCodeLink:"https://leetcode.com/problems/stickers-to-spell-word/",SolutionLink:""},{problemName:"0698 - Partition to K Equal Sum Subsets",difficulty:"Medium",LeetCodeLink:"https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",SolutionLink:""},{problemName:"0847 -  Shortest Path Visiting All Nodes",difficulty:"Medium",LeetCodeLink:"https://leetcode.com/problems/shortest-path-visiting-all-nodes/",SolutionLink:"../../solutions/0800-0899/shortest-path-visiting-all-nodes-hard"},{problemName:"1125 -  Smallest Sufficient Team",difficulty:"Hard",LeetCodeLink:"https://leetcode.com/problems/smallest-sufficient-team/",SolutionLink:"../../solutions/1100-1199/smallest-sufficient-team-hard"},{problemName:"1349 - Maximum Students Taking Exam",difficulty:"Hard",LeetCodeLink:"https://leetcode.com/problems/maximum-students-taking-exam/",SolutionLink:"../../solutions/1300-1399/maximum-students-taking-exam-hard"},{problemName:"1434 - Number of Ways to Wear Different Hats to Each Other",difficulty:"Hard",LeetCodeLink:"https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/",SolutionLink:""},{problemName:"1595 - Minimum Cost to Connect Two Groups of Points",difficulty:"Hard",LeetCodeLink:"https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/",SolutionLink:""},{problemName:"1601 - Maximum Number of Achievable Transfer Requests",difficulty:"Hard",LeetCodeLink:"https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/",SolutionLink:""},{problemName:"1655 - Distribute Repeating Integers",difficulty:"Hard",LeetCodeLink:"https://leetcode.com/problems/distribute-repeating-integers/",SolutionLink:""},{problemName:"1659 - Maximize Grid Happiness",difficulty:"Hard",LeetCodeLink:"https://leetcode.com/problems/maximize-grid-happiness/",SolutionLink:""},{problemName:"1723 - Find Minimum Time to Finish All Jobs",difficulty:"Hard",LeetCodeLink:"https://leetcode.com/problems/distribute-repeating-integers/",SolutionLink:""}],f={toc:d,DPBitManipulationProblems:p};function b(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{title:"Bit Manipulation",data:p,collectionLink:"https://leetcode.com/list/eeo6ays7",mdxType:"Table"}))}b.isMDXComponent=!0},85423:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(67294);function o(e){var t=e.title,n=e.collectionLink,o=e.data,i={Easy:0,Medium:1,Hard:2},l=o.sort((function(e,t){return i[e.difficulty]-i[t.difficulty]})).map((function(e){return r.createElement("tr",null,r.createElement("td",null,r.createElement("a",{href:e.LeetCodeLink,target:"_blank"},e.problemName)),r.createElement("td",null,e.difficulty),r.createElement("td",null,e.SolutionLink&&r.createElement("a",{href:e.SolutionLink,target:"_blank"},"View Solutions")))}));return r.createElement(r.Fragment,null,r.createElement("h3",null,t),n&&r.createElement("h4",null,"Start Practicing: ",r.createElement("a",{href:n,target:"_blank"},n)),r.createElement("table",null,r.createElement("th",null,"Problem Name"),r.createElement("th",null,"Difficulty"),r.createElement("th",null,"Solution Link"),l))}}}]);
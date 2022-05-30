"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[6816],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return N}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,m=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=o(a),N=r,d=c["".concat(p,".").concat(N)]||c[N]||u[N]||m;return a?n.createElement(d,s(s({ref:t},l),{},{components:a})):n.createElement(d,s({ref:t},l))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=a.length,s=new Array(m);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var o=2;o<m;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},47931:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return u}});var n=a(87462),r=a(63366),m=(a(67294),a(3905)),s=["components"],i={description:"Author: @wingkwong | https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/"},p="2160 - Minimum Sum of Four Digit Number After Splitting Digits (Easy)",o={unversionedId:"2100-2199/minimum-sum-of-four-digit-number-after-splitting-digits-easy",id:"2100-2199/minimum-sum-of-four-digit-number-after-splitting-digits-easy",title:"2160 - Minimum Sum of Four Digit Number After Splitting Digits (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/",source:"@site/solutions/2100-2199/2160-minimum-sum-of-four-digit-number-after-splitting-digits-easy.md",sourceDirName:"2100-2199",slug:"/2100-2199/minimum-sum-of-four-digit-number-after-splitting-digits-easy",permalink:"/leetcode-the-hard-way/solutions/2100-2199/minimum-sum-of-four-digit-number-after-splitting-digits-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2160-minimum-sum-of-four-digit-number-after-splitting-digits-easy.md",tags:[],version:"current",sidebarPosition:2160,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/"},sidebar:"tutorialSidebar",previous:{title:"2156 - Find Substring With Given Hash Value (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/find-substring-with-given-hash-value-medium"},next:{title:"2161 - Partition Array According to Given Pivot (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/partition-array-according-to-given-pivot-medium"}},l={},u=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Sorting &amp; Greedy",id:"approach-1-sorting--greedy",level:2}],c={toc:u};function N(e){var t=e.components,a=(0,r.Z)(e,s);return(0,m.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"2160---minimum-sum-of-four-digit-number-after-splitting-digits-easy"},"2160 - Minimum Sum of Four Digit Number After Splitting Digits (Easy)"),(0,m.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,m.kt)("p",null,"You are given a ",(0,m.kt)("strong",{parentName:"p"},"positive")," integer ",(0,m.kt)("inlineCode",{parentName:"p"},"num")," consisting of exactly four digits. Split ",(0,m.kt)("inlineCode",{parentName:"p"},"num")," into two new integers ",(0,m.kt)("inlineCode",{parentName:"p"},"new1")," and ",(0,m.kt)("inlineCode",{parentName:"p"},"new2")," by using the ",(0,m.kt)("strong",{parentName:"p"},"digits")," found in ",(0,m.kt)("inlineCode",{parentName:"p"},"num"),". ",(0,m.kt)("strong",{parentName:"p"},"Leading zeros")," are allowed in ",(0,m.kt)("inlineCode",{parentName:"p"},"new1")," and ",(0,m.kt)("inlineCode",{parentName:"p"},"new2"),", and ",(0,m.kt)("strong",{parentName:"p"},"all")," the digits found in ",(0,m.kt)("inlineCode",{parentName:"p"},"num")," must be used."),(0,m.kt)("p",null,"For example, given ",(0,m.kt)("inlineCode",{parentName:"p"},"num = 2932"),", you have the following digits: two ",(0,m.kt)("inlineCode",{parentName:"p"},"2"),"'s, one ",(0,m.kt)("inlineCode",{parentName:"p"},"9")," and one ",(0,m.kt)("inlineCode",{parentName:"p"},"3"),". Some of the possible pairs ",(0,m.kt)("inlineCode",{parentName:"p"},"[new1, new2]")," are ",(0,m.kt)("inlineCode",{parentName:"p"},"[22, 93]"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"[23, 92]"),", ",(0,m.kt)("inlineCode",{parentName:"p"},"[223, 9]")," and ",(0,m.kt)("inlineCode",{parentName:"p"},"[2, 329]"),"."),(0,m.kt)("p",null,"Return ",(0,m.kt)("em",{parentName:"p"},"the ",(0,m.kt)("strong",{parentName:"em"},"minimum")," possible sum of")," ",(0,m.kt)("inlineCode",{parentName:"p"},"new1")," ",(0,m.kt)("em",{parentName:"p"},"and")," ",(0,m.kt)("inlineCode",{parentName:"p"},"new2"),"."),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 1:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: num = 2932\nOutput: 52\nExplanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.\nThe minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Example 2:")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre"},"Input: num = 4009\nOutput: 13\nExplanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc. \nThe minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.\n")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Constraints:")),(0,m.kt)("ul",null,(0,m.kt)("li",{parentName:"ul"},(0,m.kt)("inlineCode",{parentName:"li"},"1000 <= num <= 9999"))),(0,m.kt)("h2",{id:"approach-1-sorting--greedy"},"Approach 1: Sorting & Greedy"),(0,m.kt)("p",null,"We can sort those 4 digits in an increasing order. Let's say ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"b"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"d")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"abcd")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"ab"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d")))))," where ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mo",{parentName:"mrow"},"<"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"b"),(0,m.kt)("mo",{parentName:"mrow"},"<"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mo",{parentName:"mrow"},"<"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mi",{parentName:"mrow"},"d")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a <= b <= c <= d")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"<="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7335em",verticalAlign:"-0.0391em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"<="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"<="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"))))),". We put those two smallest digits to be decimal's place, and those two largest ones in one's place. The answer is simply ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mo",{parentName:"mrow"},"+"),(0,m.kt)("mi",{parentName:"mrow"},"b"),(0,m.kt)("mi",{parentName:"mrow"},"d")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"ac + bd")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6667em",verticalAlign:"-0.0833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"c"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"))))),"."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int minimumSum(int num) {\n        string s = to_string(num);\n        vector<int> d;\n        while (num > 0) {\n            d.push_back(num % 10);\n            num /= 10;\n        }\n        sort(d.begin(), d.end());\n        return d[0] * 10 + d[3] + d[1] * 10 + d[2];\n    }\n};\n")))}N.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[9082],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(t),k=r,h=c["".concat(s,".").concat(k)]||c[k]||u[k]||o;return t?a.createElement(h,m(m({ref:n},p),{},{components:t})):a.createElement(h,m({ref:n},p))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,m=new Array(o);m[0]=c;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,m[1]=i;for(var l=2;l<o;l++)m[l]=t[l];return a.createElement.apply(null,m)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},36075:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),m=["components"],i={description:"Author: @wingkwong | https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/"},s="2190 - Most Frequent Number Following Key In an Array (Easy)",l={unversionedId:"2100-2199/most-frequent-number-following-key-in-an-array-easy",id:"2100-2199/most-frequent-number-following-key-in-an-array-easy",title:"2190 - Most Frequent Number Following Key In an Array (Easy)",description:"Author: @wingkwong | https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/",source:"@site/solutions/2100-2199/2190-most-frequent-number-following-key-in-an-array-easy.md",sourceDirName:"2100-2199",slug:"/2100-2199/most-frequent-number-following-key-in-an-array-easy",permalink:"/leetcode-the-hard-way/solutions/2100-2199/most-frequent-number-following-key-in-an-array-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2190-most-frequent-number-following-key-in-an-array-easy.md",tags:[],version:"current",sidebarPosition:2190,frontMatter:{description:"Author: @wingkwong | https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/"},sidebar:"tutorialSidebar",previous:{title:"2188 - Minimum Time to Finish the Race (Hard)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/minimum-time-to-finish-the-race-hard"},next:{title:"2191 - Sort the Jumbled Numbers (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/sort-the-jumbled-numbers-medium"}},p={},u=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: Counting",id:"approach-1-counting",level:2}],c={toc:u};function k(e){var n=e.components,t=(0,r.Z)(e,m);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"2190---most-frequent-number-following-key-in-an-array-easy"},"2190 - Most Frequent Number Following Key In an Array (Easy)"),(0,o.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"You are given a ",(0,o.kt)("strong",{parentName:"p"},"0-indexed")," integer array ",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),". **** You are also given an integer ",(0,o.kt)("inlineCode",{parentName:"p"},"key"),", which is present in ",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),"."),(0,o.kt)("p",null,"For every unique integer ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),", ",(0,o.kt)("strong",{parentName:"p"},"count")," the number of times ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," immediately follows an occurrence of ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"nums"),". In other words, count the number of indices ",(0,o.kt)("inlineCode",{parentName:"p"},"i")," such that:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0 <= i <= n - 2"),","),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nums[i] == key")," and,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nums[i + 1] == target"),".")),(0,o.kt)("p",null,"Return ",(0,o.kt)("em",{parentName:"p"},"the")," ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," ",(0,o.kt)("em",{parentName:"p"},"with the ",(0,o.kt)("strong",{parentName:"em"},"maximum")," count"),". The test cases will be generated such that the ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," with maximum count is unique."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 1:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [1,100,200,1,100], key = 1\nOutput: 100\nExplanation: For target = 100, there are 2 occurrences at indices 1 and 4 which follow an occurrence of key.\nNo other integers follow an occurrence of key, so we return 100.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example 2:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Input: nums = [2,2,2,2,3], key = 2\nOutput: 2\nExplanation: For target = 2, there are 3 occurrences at indices 1, 2, and 3 which follow an occurrence of key.\nFor target = 3, there is only one occurrence at index 4 which follows an occurrence of key.\ntarget = 2 has the maximum number of occurrences following an occurrence of key, so we return 2.\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Constraints:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"2 <= nums.length <= 1000")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"1 <= nums[i] <= 1000")),(0,o.kt)("li",{parentName:"ul"},"The test cases will be generated such that the answer is unique.")),(0,o.kt)("h2",{id:"approach-1-counting"},"Approach 1: Counting"),(0,o.kt)("p",null,"We iterate the input to find the possible ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"t"),(0,o.kt)("mi",{parentName:"mrow"},"a"),(0,o.kt)("mi",{parentName:"mrow"},"r"),(0,o.kt)("mi",{parentName:"mrow"},"g"),(0,o.kt)("mi",{parentName:"mrow"},"e"),(0,o.kt)("mi",{parentName:"mrow"},"t")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"target")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"t")))))," and store its occurrence. Return the maximum one."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int mostFrequent(vector<int>& nums, int key) {\n        int n = nums.size(), ans = 0;\n        // use hash map to store the occurrence of a possible target\n        unordered_map<int, int> m;\n        for (int i = 1; i < n; i++) {\n            // the previous one is key\n            // nums[i] is target\n            if (nums[i - 1] == key) {\n                // count occurrence\n                m[nums[i]]++;\n            }\n        }\n        int mx = 0;\n        for (auto x : m) {\n            // check if it is greater than the current max count\n            if (x.second > mx) {\n                // store the number\n                ans = x.first;\n                // update the max count\n                mx = x.second;\n            }\n        }\n        return ans;\n    }\n};\n")),(0,o.kt)("p",null,"Once we get the idea, we can further optimise the above solution a bit. We only set answer if the current number is ",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"t"),(0,o.kt)("mi",{parentName:"mrow"},"a"),(0,o.kt)("mi",{parentName:"mrow"},"r"),(0,o.kt)("mi",{parentName:"mrow"},"g"),(0,o.kt)("mi",{parentName:"mrow"},"e"),(0,o.kt)("mi",{parentName:"mrow"},"t")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"target")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8095em",verticalAlign:"-0.1944em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"t")))))," and its occurrence is greater than the current max count."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int mostFrequent(vector<int>& nums, int key) {\n        int n = nums.size(), ans = 0;\n        unordered_map<int, int> m;\n        for (int i = 1; i < n; i++) {\n            if (nums[i - 1] == key && ++m[nums[i]] > m[ans]) {\n                ans = nums[i];\n            }\n        }\n        return ans;\n    }\n};\n")))}k.isMDXComponent=!0}}]);
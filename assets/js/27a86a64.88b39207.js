"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[3052],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,d=c["".concat(l,".").concat(f)]||c[f]||m[f]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},21754:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={description:"Author: @TBC | https://leetcode.com/problems/find-the-difference-of-two-arrays/"},l="2215 - Find the Difference of Two Arrays (Easy)",p={unversionedId:"2100-2199/find-the-difference-of-two-arrays-easy",id:"2100-2199/find-the-difference-of-two-arrays-easy",title:"2215 - Find the Difference of Two Arrays (Easy)",description:"Author: @TBC | https://leetcode.com/problems/find-the-difference-of-two-arrays/",source:"@site/solutions/2100-2199/2215-find-the-difference-of-two-arrays-easy.md",sourceDirName:"2100-2199",slug:"/2100-2199/find-the-difference-of-two-arrays-easy",permalink:"/leetcode-the-hard-way/solutions/2100-2199/find-the-difference-of-two-arrays-easy",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/solutions/2100-2199/2215-find-the-difference-of-two-arrays-easy.md",tags:[],version:"current",sidebarPosition:2215,frontMatter:{description:"Author: @TBC | https://leetcode.com/problems/find-the-difference-of-two-arrays/"},sidebar:"tutorialSidebar",previous:{title:"2209 - Minimum White Tiles After Covering With Carpets (Hard)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/minimum-white-tiles-after-covering-with-carpets-hard"},next:{title:"2216 - Minimum Deletions to Make Array Beautiful (Medium)",permalink:"/leetcode-the-hard-way/solutions/2100-2199/minimum-deletions-to-make-array-beautiful-medium"}},u={},m=[{value:"Problem Statement",id:"problem-statement",level:2},{value:"Approach 1: TBC",id:"approach-1-tbc",level:2}],c={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"2215---find-the-difference-of-two-arrays-easy"},"2215 - Find the Difference of Two Arrays (Easy)"),(0,i.kt)("h2",{id:"problem-statement"},"Problem Statement"),(0,i.kt)("p",null,"Given two ",(0,i.kt)("strong",{parentName:"p"},"0-indexed")," integer arrays ",(0,i.kt)("inlineCode",{parentName:"p"},"nums1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"nums2"),", return ",(0,i.kt)("em",{parentName:"p"},"a list")," ",(0,i.kt)("inlineCode",{parentName:"p"},"answer")," ",(0,i.kt)("em",{parentName:"p"},"of size")," ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," ",(0,i.kt)("em",{parentName:"p"},"where:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"answer[0]")," ",(0,i.kt)("em",{parentName:"li"},"is a list of all ",(0,i.kt)("strong",{parentName:"em"},"distinct")," integers in")," ",(0,i.kt)("inlineCode",{parentName:"li"},"nums1")," ",(0,i.kt)("em",{parentName:"li"},"which are ",(0,i.kt)("strong",{parentName:"em"},"not")," present in")," ",(0,i.kt)("inlineCode",{parentName:"li"},"nums2"),(0,i.kt)("em",{parentName:"li"},".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"answer[1]")," ",(0,i.kt)("em",{parentName:"li"},"is a list of all ",(0,i.kt)("strong",{parentName:"em"},"distinct")," integers in")," ",(0,i.kt)("inlineCode",{parentName:"li"},"nums2")," ",(0,i.kt)("em",{parentName:"li"},"which are ",(0,i.kt)("strong",{parentName:"em"},"not")," present in")," ",(0,i.kt)("inlineCode",{parentName:"li"},"nums1"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note")," that the integers in the lists may be returned in ",(0,i.kt)("strong",{parentName:"p"},"any")," order."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 1:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums1 = [1,2,3], nums2 = [2,4,6]\nOutput: [[1,3],[4,6]]\nExplanation:\nFor nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].\nFor nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example 2:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]\nOutput: [[3],[]]\nExplanation:\nFor nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].\nEvery integer in nums2 is present in nums1. Therefore, answer[1] = [].\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constraints:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1 <= nums1.length, nums2.length <= 1000")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-1000 <= nums1[i], nums2[i] <= 1000"))),(0,i.kt)("h2",{id:"approach-1-tbc"},"Approach 1: TBC"))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkleetcode_the_hard_way=self.webpackChunkleetcode_the_hard_way||[]).push([[1070],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(a),c=r,d=u["".concat(p,".").concat(c)]||u[c]||h[c]||o;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},15931:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return f},frontMatter:function(){return l},metadata:function(){return h},suggestedProblems:function(){return d},toc:function(){return c}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=a(92194),s=a(85423),p=["components"],l={title:"Heap / Priority Queue",description:"A heap, or a priority queue, is a data structure that efficiently stores elements in a particular order.",keywords:["leetcode","tutorial","heap","priority queue","algorithm"]},m=void 0,h={unversionedId:"basic-topics/heap",id:"basic-topics/heap",title:"Heap / Priority Queue",description:"A heap, or a priority queue, is a data structure that efficiently stores elements in a particular order.",source:"@site/tutorials/basic-topics/heap.md",sourceDirName:"basic-topics",slug:"/basic-topics/heap",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/heap",draft:!1,editUrl:"https://github.com/wingkwong/leetcode-the-hard-way/tutorials/basic-topics/heap.md",tags:[],version:"current",frontMatter:{title:"Heap / Priority Queue",description:"A heap, or a priority queue, is a data structure that efficiently stores elements in a particular order.",keywords:["leetcode","tutorial","heap","priority queue","algorithm"]},sidebar:"tutorialSidebar",previous:{title:"Hash Map",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/hash-map"},next:{title:"Queue & Stack",permalink:"/leetcode-the-hard-way/tutorials/basic-topics/queue-and-stack"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Operations",id:"operations",level:3},{value:"Insertion",id:"insertion",level:4},{value:"Deletion",id:"deletion",level:3},{value:"Python",id:"python",level:2},{value:"C++",id:"c",level:2}],d=[{problemName:"0703 - Kth Largest Element in a Stream",difficulty:"Easy",LeetCodeLink:"https://leetcode.com/problems/kth-largest-element-in-a-stream/",SolutionLink:"../../solutions/0700-0799/kth-largest-element-in-a-stream-easy"},{problemName:"0215 - Kth Largest Element in an Array",difficulty:"Medium",LeetCodeLink:"https://leetcode.com/problems/kth-largest-element-in-an-array/",SolutionLink:"../../solutions/0200-0299/kth-largest-element-in-an-array-medium"},{problemName:"0973 - K Closest Points to Origin",difficulty:"Medium",LeetCodeLink:"https://leetcode.com/problems/k-closest-points-to-origin/",SolutionLink:"../../solutions/0900-0999/k-closest-points-to-origin-medium"}],k={toc:c,suggestedProblems:d};function f(e){var t=e.components,a=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{names:"@heiheihang,@potatochick",mdxType:"Authors"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"A heap, or a priority queue, is a data structure that efficiently stores elements in a particular order. It is very efficient in inserting an element to the heap (",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"O"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("mi",{parentName:"mrow"},"l"),(0,o.kt)("mi",{parentName:"mrow"},"o"),(0,o.kt)("mi",{parentName:"mrow"},"g"),(0,o.kt)("mi",{parentName:"mrow"},"N"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(logN)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,o.kt)("span",{parentName:"span",className:"mclose"},")"))))),"), and very efficient in removing the first element of the heap (",(0,o.kt)("span",{parentName:"p",className:"math math-inline"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mi",{parentName:"mrow"},"O"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,o.kt)("mi",{parentName:"mrow"},"l"),(0,o.kt)("mi",{parentName:"mrow"},"o"),(0,o.kt)("mi",{parentName:"mrow"},"g"),(0,o.kt)("mi",{parentName:"mrow"},"N"),(0,o.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(logN)")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,o.kt)("span",{parentName:"span",className:"mopen"},"("),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,o.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"N"),(0,o.kt)("span",{parentName:"span",className:"mclose"},")"))))),"). To know the details of heap, we recommend you to look at ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=t0Cq6tVNRBA"},"this"),"."),(0,o.kt)("h3",{id:"operations"},"Operations"),(0,o.kt)("h4",{id:"insertion"},"Insertion"),(0,o.kt)("p",null,"To do insetion in heap, we would add the new element to the end of the heap. If the position of the new element violates the heap properity, the new elements will be sifted up until it reaches the correct position.\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/63882653/171032169-d92bc368-8f5a-44eb-8507-3c84f884c113.gif",alt:"heap_insertion"})),(0,o.kt)("h3",{id:"deletion"},"Deletion"),(0,o.kt)("p",null,"In heap, the deletion refers to pop the root in the heap. After the root of the heap has been popped out, the last element of the heap will be inserted to the root position. If this violates the heap porperity, the new root would be sifted down until it reaches the correct position.\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/63882653/171033836-ec8841ac-649a-468d-8961-4ad395152df7.gif",alt:"deletion_heap"})),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("p",null,"By default, when we refer to heap, most implementations are min-heaps. This means the first element is always the smallest element."),(0,o.kt)("p",null,"In Python, you can use the following functions to interact with a heap:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"heap = [] #to initialize a heap, it is just a list\n\nheappush(heap, 3) # to add an element to the heap, we can use heappush\n#heap = [3] \n\nheappush(heap, 5)\n#heap = [3, 5] , the heap always keeps the smallest element in front!\n\nsmallest_element_from_heap = heappop(heap) #we can remove the first element from heap with heappop\n#heap = [5] , 3 is removed\n#smallest_element_from_heap = 3  #after heappop, it is stored in the variable\n")),(0,o.kt)("p",null,"That's it! These are the operations you need for using heap in LeetCode."),(0,o.kt)("p",null,"There is one more trick to learn for using heap. How do we tweak the heap to make it a max-heap?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"max_heap = []\n\n#we want to store 10, but change it to -10 for max-heap\nheappush(max_heap, -10)\n#max_heap = [-10]\n\n\n#we want to store 7, but change it to -7 for max-heap\nheappush(max_heap, -7)\n#max_heap = [-10, -7]\n\nmax_element_from_heap = -1 * heappop(heap)\n#heap = [-7], -10 is removed\n#max_element_from_heap = 10, we have retrieved the largest element from the heap\n")),(0,o.kt)("p",null,"Let's work on a problem (",(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/last-stone-weight/"},"LeetCode Link"),")"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You are given an array of integers ",(0,o.kt)("inlineCode",{parentName:"p"},"stones")," where ",(0,o.kt)("inlineCode",{parentName:"p"},"stones[i]")," is the weight of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ith")," stone."),(0,o.kt)("p",{parentName:"blockquote"},"We are playing a game with the stones. On each turn, we choose the ",(0,o.kt)("strong",{parentName:"p"},"heaviest two stones")," and smash them together. Suppose the heaviest two stones have weights ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"x <= y"),". The result of this smash is:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"x == y"),", both stones are destroyed, and"),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"x != y"),", the stone of weight ",(0,o.kt)("inlineCode",{parentName:"li"},"x")," is destroyed, and the stone of weight ",(0,o.kt)("inlineCode",{parentName:"li"},"y")," has new weight ",(0,o.kt)("inlineCode",{parentName:"li"},"y - x"),".")),(0,o.kt)("p",{parentName:"blockquote"},"At the end of the game, there is ",(0,o.kt)("strong",{parentName:"p"},"at most one")," stone left."),(0,o.kt)("p",{parentName:"blockquote"},"Return ",(0,o.kt)("em",{parentName:"p"},"the smallest possible weight of the left stone"),". If there are no stones left, return ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),".")),(0,o.kt)("p",null,"I want you to think about these questions before working on it:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Should we use a min-heap or a max-heap?"),(0,o.kt)("li",{parentName:"ul"},'If it is a max-heap, how to we "store" the numbers?'),(0,o.kt)("li",{parentName:"ul"},"What do we have to check before retrieving the two heaviest stones?")),(0,o.kt)("p",null,"As we need to get the two heaviest stones in every iteration, we should use a max-heap for quick access of the largest elements. To use a max-heap, we can store the negative of the integer. We have to check if there are at least two more stones in the heap before retrieving the two heaviest stones."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def lastStoneWeight(self, stones: List[int]) -> int:\n        \n        #initialize the max_heap\n        max_heap = []\n        \n        #add elements to max_heap\n        for stone in stones:\n            #store its negative to keep the most positive stone in front\n            heappush(max_heap, -stone)\n            \n        #we have to check if there are at least two stones in the heap\n        while(len(max_heap) > 1):\n            \n            #pop the largest element from max_heap, multiplied by -1\n            largest_stone = -1 * heappop(max_heap)\n            \n            #pop the second largest element (now largest) from max_heap, multiplied by -1\n            second_largest_stone = -1 * heappop(max_heap)\n            \n            #push the new stone if they are not equal\n            if(largest_stone != second_largest_stone):\n                new_stone = largest_stone - second_largest_stone\n                #remember to store its negative\n                heappush(max_heap, -new_stone)\n        \n        #if there is a stone left, return the stone, its positive value\n        if(max_heap):\n            return -max_heap[0]\n            \n        #if no stone left, return 0\n        return 0\n")),(0,o.kt)("h2",{id:"c"},"C++"),(0,o.kt)("p",null,"In C++, when we are refer to heap, we mostly refer to priority queue. By default, priority queue is a max heap in c++."),(0,o.kt)("p",null,"Create a max heap:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"priority_queue<int> max_heap; // max heap \n")),(0,o.kt)("p",null,"Create a min heap:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"priority_queue<int,vector<int>,greater<int>> min_heap; // min heap \n")),(0,o.kt)("p",null,"Other related function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'priority_queue<int> max_heap; //max heap\n\n//To push element into a priority queue\nmax_heap.push(1);\nmax_heap.push(2);\nmax_heap.push(3);\n//max_heap now contains: {3,2,1}\n\n//To push element from a vector into a priority queue\nvector<int> vc = {6,5,4};\nfor (auto x:vc){\n  max_heap.push(x);\n}\n//max_heap now contains: {6,5,4,3,2,1}\n\n//To get element from the priority queue\nint top_element = max_heap.top();max_heap.pop();\ncout<<top_element; //output: 6\n//As we want to access the second largest element later, we need to remove the max element after we access it. \n\n//To get all element from the priority queue\nwhile(!max_heap.empty()){\n  int element = max_heap.top();max_heap.pop();\n  cout<<element<<" "; //output: 5 4 3 2 1\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Advance usage:")," Use heap to sort the element by value while containing the index of the elements."),(0,o.kt)("p",null,"Let's work on a problem (",(0,o.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/"},"LeetCode Link"),")"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"you are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of >the civilians. That is, all the 1's will appear to the left of all the 0's in each row."),(0,o.kt)("p",{parentName:"blockquote"},"A row i is weaker than a row j if one of the following is true:"),(0,o.kt)("p",{parentName:"blockquote"},"The number of soldiers in row i is less than the number of soldiers in row j.\nBoth rows have the same number of soldiers and i < j.\nReturn the indices of the k weakest rows in the matrix ordered from weakest to strongest.")),(0,o.kt)("p",null,"The idea of this question is "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"count the number of soilders in each row"),(0,o.kt)("li",{parentName:"ul"},"sort it"),(0,o.kt)("li",{parentName:"ul"},"return the 1st - kth weakest ",(0,o.kt)("strong",{parentName:"li"},"index")," of row")),(0,o.kt)("p",null,"We will use a min heap as we want the result rank from ",(0,o.kt)("inlineCode",{parentName:"p"},"weakest to strongest"),"."),(0,o.kt)("p",null,"Create a min heap which will contains ",(0,o.kt)("inlineCode",{parentName:"p"},"pair of {number of soldiers in the row, row index}"),". By default, c++ will rank the order of element by the first element in the heap. In this case, it will be ",(0,o.kt)("inlineCode",{parentName:"p"},"number of soldiers")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"priority_queue<pair<int,int>,vector<pair<int,int>>,greater<pair<int,int>>> pq;\n//priority_queue<pair<int,int>,vector<pair<int,int>>,greater<>> pq; // this line will also work\n")),(0,o.kt)("p",null,"To access the ",(0,o.kt)("inlineCode",{parentName:"p"},"pair of {number of soldiers in the row, row index}")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"pair<int,int> top_element;\ntop_element=pq.top();pq.pop();\nint number_of_soldiers = top_element.first;\nint index = top_element.second;\n")),(0,o.kt)("p",null,"My solution:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"vector<int> kWeakestRows(vector<vector<int>>& mat, int k) {\n        priority_queue<pair<int,int>,vector<pair<int,int>>,greater<>> pq; //min heap\n        //push elements to min heap\n        for (int i =0;i<mat.size();i++){\n            int count= 0;\n            for (int j=0;j<mat[0].size();j++){\n                if (mat[i][j] == 1) count++;\n            }\n            pq.push({count,i}); //push pair of {number of soldiers in the row, row index} to the min heap\n            //pq.push(make_pair(count,i)); can replace with this line of syntax \n        }\n        vector<int> result;\n        int count = 0;\n        \n        //get the index only from the heap and put it in the array\n        while(!pq.empty() && count<k){\n            count++;\n            int ans = pq.top().second;\n            pq.pop();\n            result.push_back(ans);\n        }\n        return result;\n    }\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Additional knowledge:")," You can create a ",(0,o.kt)("inlineCode",{parentName:"p"},"max heap with pair<int,int>")," with following syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"priority_queue<pair<int,int>> pq;\n")),(0,o.kt)(s.Z,{title:"Suggested Problems",data:d,mdxType:"Table"}))}f.isMDXComponent=!0},92194:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.names.split(",");return n.createElement("div",{className:"author-wrapper"},t.length>1?"Authors":"Author",":",t.map((function(e,t){return n.createElement("span",{key:t,className:"author-tag"},e)})))}},85423:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(67294);function r(e){var t=e.title,a=e.collectionLink,r=e.data,o={Easy:0,Medium:1,Hard:2},i=r.sort((function(e,t){return o[e.difficulty]-o[t.difficulty]})).map((function(e){return n.createElement("tr",null,n.createElement("td",null,n.createElement("a",{href:e.LeetCodeLink,target:"_blank"},e.problemName)),n.createElement("td",null,e.difficulty),n.createElement("td",null,e.SolutionLink&&n.createElement("a",{href:e.SolutionLink,target:"_blank"},"View Solutions")))}));return n.createElement(n.Fragment,null,n.createElement("h3",null,t),a&&n.createElement("h4",null,"Start Practicing: ",n.createElement("a",{href:a,target:"_blank"},a)),n.createElement("table",null,n.createElement("th",null,"Problem Name"),n.createElement("th",null,"Difficulty"),n.createElement("th",null,"Solution Link"),i))}}}]);
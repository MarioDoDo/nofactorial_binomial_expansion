# nofactorial_binomial_expansion
Iterative non factorial algorithm for binomial expansion and summarisation based on capital pi notation of binomial theorem with big-O time complexity equals to O(x^2)<br>
Writen for [bun](https://bun.sh) js/ts runtime

To avaid using factorial there is possibility to use product insted, with same time complexity
$$(x+y)^n=\sum_{k=0}^{n}\left(\frac{n!}{k!(n-k)!}x^{n-k}y^{k}\right)=\sum_{k=0}^{n}\left(\left(\prod_{i=0}^{k-i}{\frac{k-x}{n-x}}\right)x^{n-k}y^{k}\right)$$

Function binomial() returns the result after substituting values of x and y into to exprassion.<br>
Function binomialString() returns the polynom

package main

import "fmt"

func test(a *int) {
	*a = 5
}

func main() {
	var x = 3
	test(&x)
	fmt.Println(x)
}

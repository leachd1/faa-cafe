package main

import (
	"fmt"
	"net/http"
)

func home_page(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "sanyok huesos")
}

func handleRequest() {
	http.HandlerFunc("/main", home_page)
	http.ListenAndServe(":8080", nil)
	http.ListenAndServe()
}
func main() {
	handleRequest()
}

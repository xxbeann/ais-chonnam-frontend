//comment라는 타입을 만들거야. 구별하기 쉽게 타입 지정을 하자!
// key값은 카멜 형식
// type을 만들고 리덕스로 감 하지만 데이터가 없으므로 목데이터로.
// type만들 때 api와 상의하면서 똑같이 만들어야 함.
// int로하면 활용도가 떨어진다. type에 1부터 5까지 지정도 가능
export type Comment = {
    commentId: number,
    userId: string,
    rating: number,
    contents: string,
}

export type CommentState = {
    commentList : Comment[]
}



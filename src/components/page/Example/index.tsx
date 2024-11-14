// 디자인적으로 어떻게 할 것이냐가 관건.
import { Button, Card, CardContent, Grid, Typography } from "@mui/material"
import useComment from "hooks/useComment"
import { useEffect } from "react"
import 'styles/common.css'
import CommentCard from "./CommentCard"
// 여기에 화면 구성이 들어갑니다.
const Example = () => {

  const { onCreateCommentList, commentList } = useComment()

  const courseNo = 3

  useEffect(() => {
    onCreateCommentList(courseNo)
    // 이 컴포넌트가 실행될 때 초기에 실행하고자하는 것.
    // eslint-disable-next-line react-hooks/exhaustive-deps 
    // useEffect -> hook -> redux
  }, [])

  return ( // 화면에 실제로 표시되는 내용. html 태그를 넣어줘야함. Grid material UI
    // card도 하나의 컴포넌트로 빼서 활용 가능.
    // map함수에서는 무조건 키 설정을 해줘야함.
    <Grid>
      {commentList.map((item)=> 
       <CommentCard key = {item.commentId} comment = {item}></CommentCard>
      )}
    </Grid>
  )
}

export default Example
// 디자인적으로 어떻게 할 것이냐가 관건.
// Grid안이 복잡해졌을 때 컴포넌트 화.
import { Button, Card, CardContent, Grid, Typography } from "@mui/material"
import 'styles/common.css'
import { Comment } from "types/comment"


interface CommentProps {
    comment : Comment
}
// 여기에 화면 구성이 들어갑니다.
const CommentCard = ({comment}:CommentProps) => {

  // 자바스크립트에서 함수를 만들 때 function이 아닌 const로 만드는 이유가 있다.
  const createRatingStar = (rating: number) => {
    let star = ''
    for(let i = 0; i < rating; i++){
      star = star + '☆'
    }
    return star
  }

  const maskString = (userId:string) => {
    if (userId.length <= 2){
      return userId;
    }

    const visiblePart = userId.slice(0,2);
    const maskedPart = '****';

    return visiblePart + maskedPart
  }

  return ( // 화면에 실제로 표시되는 내용. html 태그를 넣어줘야함. Grid material UI
    // card도 하나의 컴포넌트로 빼서 활용 가능.
        <Card>
          <CardContent>
          <Typography>
              {
                maskString(comment.userId)
              }
            </Typography>
            <Typography>
              {
                createRatingStar(comment.rating)
              }
            </Typography>
            <Typography>
              {
                comment.contents
              }
            </Typography>
          </CardContent>
        </Card>
      )}


export default CommentCard
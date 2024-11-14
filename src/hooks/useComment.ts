// hook -> 스테이징에 있는 정보를 끌고오는 애
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from 'redux/store'
import {
  createCommentList,
  commentSelector,
} from 'redux/modules/comment'
import { number } from 'yup'

const useComment = () => {
  const dispatch = useDispatch<AppDispatch>()

  const employeeState = useSelector(commentSelector)
  const {commentList } = employeeState

  const onCreateCommentList = (courseNo : number) => {
    dispatch(createCommentList(courseNo))
  }

  return {
    onCreateCommentList,
    commentList,
  }
}

export default useComment

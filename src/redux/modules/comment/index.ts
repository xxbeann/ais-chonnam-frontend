import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API } from 'constant/api'
import { RootState } from 'redux/store'
import { CommentState } from 'types/comment'
import { api } from 'utill/axios'

// API를 불러오는 것 (파라미터를 보내서 API를 불러오는 것, 변수는 객체 혹은 배열이 되어도 됨.)
export const createCommentList = createAsyncThunk(
  'comment/createCommentList',
  async (data: number, { rejectWithValue }) => {
    try {
      const response = await api.get(API.COMMENT_TEST, {params: data}) // constant화 문자열 하드코딩이 되어있으면 안좋다. API를 불러오면 Util이라는 곳에서 움직임. API쪽 URL.
      // get방식에 params data를 넣어서 보낸다.
      return response.data
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'An error has occurred.')
    }
  }
)

// 初期状態を正義
const initialState: CommentState = {
  commentList : []
}
// commentList를 다른 곳에서도 사용할 수 있게 설정해 놓은 것. -> commentRducer

// slice生成 API에서 불러온 값을 파싱해서 commentList에 저장
export const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createCommentList.fulfilled, (state, action) => { //createcomment 실행 시 fullfill 성공했을 때.
        state.commentList = action.payload // action.payload는 리턴 값. commentList에 값 추가.
      })
      .addCase(createCommentList.rejected, (state) => { // 실패 했을 때.
        state.commentList = []
      })
  }
})
// selector定義
export const commentSelector = (state: RootState) => state.comment

export default commentSlice.reducer
// 이 파일에서 디폴트로 export하는 것.
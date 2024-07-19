# 해외 취업 뽀개기 프로젝트

## 개요

프론트 엔드

## 참고 자료

## 작업순서

### 주의사항

### 새로운 작업 절차

※（gitlab）以外はローカルでの作業

1. Issueを作成する（gitlab）
2. git checkout devleop
3. git pull origin devleop
4. git checkout -b [新しいブランチ]
5. 作業をする
6. git add [変更・生成したファイル]　/　git add .（変更点の全部ステージにのせる、非推奨）
7. git commit -m "[作業内容（英語）]"
8. git push origin [新しいブランチ]
9. Merge Request を作成（gitlab）
10. CIテストが成功しますとレビュー者に報告

### 충돌 발생시 절차

※（gitlab）以外はローカルでの作業

1. git checkout devleop
2. git pull origin devleop
3. git checkout [衝突が発生したブランチ]
4. git merge develop
5. 衝突対応をする
6. git status（ステージに載せられなかった変更があるのか確認）
7. git add [変更・生成したファイル]　/　git add .（変更点の全部ステージにのせる、非推奨）
8. git commit -m "merged develop"
9. git push origin [衝突が発生したブランチ]
10. CIテストが成功しますとレビュー者に報告

### 다른 브런치를 참고 하고 싶은 경우

※（gitlab）以外はローカルでの作業

1. git checkout devleop
2. git fetch origin
3. git checkout -b [参考するブランチ] origin/[参考するブランチ]

### commit이 틀렸을 경우

※直前commitについての対応

1. git reset --soft HEAD^
2. 内容を修正する
3. git status（ステージに載せられなかった変更があるのか確認）
4. git add [変更・生成したファイル]　/　git add .（変更点の全部ステージにのせる、非推奨）
5. git commit -m "[作業内容（英語）]"

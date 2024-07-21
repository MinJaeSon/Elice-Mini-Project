# Elice Frontend Team PA

## 시연영상

[시연영상 보러가기](https://youtu.be/cjLFXDn8AY0)

<br/>

## Skills

`React v18.3.1` `TypeScript` `styled-components` `axios` `ESLint` `Prettier`

<br/>

## Commit Convention

- `feat` : 새로운 기능 구현
- `fix` : 오류 및 버그 해결
- `add` : feat 이외의 부수적인 코드 추가
- `docs` : README나 WIKI 같은 문서 개정
- `chore` : 간단한 코드 수정, 내부 파일 수정
  - `chore(package)` : 라이브러리 종속성 추가
- `rename` : 파일명 변경 시 사용
- `del` : 쓸모없는 코드 삭제
- `style` : 코드 스타일 혹은 포맷 등에 관한 커밋
- `refact` : 코드 리팩토링에 대한 커밋
- `design` : css 및 스타일링에 대한 커밋
- `assets` : 이미지 파일 추가

<br/>

## Directory Structure

```
└─ src
	├─ api                // api 호출을 하는 함수를 관리합니다.
	├─ assets             // 이미지 파일 등을 관리합니다.
	├─ components         // 컴포넌트를 관리합니다.
	│      ├─ courses
	│      └─ search
	├─ hooks              // 커스텀 훅을 관리합니다.
	└─ typing             // 재사용되는 type 및 interface를 관리합니다.
```

## 구현 방식

### UI

- 실제 페이지(엘카데미)를 모방하여 요구사항대로 구현하였습니다.
- 추가 구현 : courseCard hover 효과, 이미지가 null인 course에 대해 기본 이미지 처리

### Filter

- `useSearchParams`를 사용하여 선택한 필터의 value를 url의 쿼리 스트링으로 추가하였습니다.

### Search

- `useDebounce` hook을 생성하여 검색어 입력 시 500ms의 debounce 처리를 해주었습니다.
- `useSearchParams`를 사용하여 입력한 검색어를 url의 쿼리 스트링으로 추가하였습니다.

### Pagination

- 상태관리 : <br/>
  - `courses` : 불러온 course의 정보가 담긴 전체 배열
  - `courseCount` : course의 총 개수
  - `offset` : 현재 페이지의 위치를 구하는 척도
  - `count` : 한 페이지 당 course의 개수
  - `currentPage` : 현재 페이지 번호
  - `totalPage` : 총 페이지 수
- 마운트 시 `courseCount`와 `count` 값을 통해 `totalPage`를 구하고, 그 수만큼 페이지의 범위를 구하였습니다.
- 페이지 버튼 또는 화살표 버튼을 눌렀을 때 `currentPage`와 `offset`의 값을 업데이트 시키며 각 페이지의 데이터를 불러왔습니다.

### API

- API 통신을 위한 라이브러리는 `axios`를 사용하였습니다.
- `api.ts` 파일에서 api 호출을 위한 인스턴스를 생성하여 api 요청을 모듈화하였습니다.
- `filter_conditions`, `offset`, `count`를 params에 담아 요청을 보냈습니다. 이들은 검색어 입력 또는 필터 선택, 페이지 이동에 따라 상태가 업데이트되어 현재 상태에 대해 올바른 데이터를 fetch 해올 수 있습니다.

<br/>

## 기타 사항

- course를 불러오는 API 요청에 대해 response 데이터의 타입을 걸어 안정성을 높이고 싶었으나, `course_count`의 하위 데이터가 방대하여 적용하지 못했습니다. <br/> `typing.ts`의 interface는 이와 관련해 수동으로 작성한 타입들로, 실제 response와 완벽히 일치하지 않기에 `OrgAcademdyCourseListResponse`는 정의만 해두었습니다.
- `react-query`를 사용하여 전역 상태 관리 및 데이터 fetching을 시도해보고 싶었으나 시간 관계상 하지 못하였습니다.
- 로딩 시의 skeleton ui 또는 loading ui 렌더 처리, 에러 처리를 해주고 싶었으나 시간 관계상 적용하지 못하였습니다.
- 페이지 이동 범위를 제한하는 로직을 보다 직관적이고 재사용성 있게 재구성하고 싶었으나 시간 관계상 진행하지 못하였습니다.
- 구현 후 `yarn build`를 통해 정상적으로 프로젝트가 빌드 되는 것을 확인하였습니다.
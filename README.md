## Redux 혹은 Mobx 를 이용한 가위 바위 보 구현

### 구현 조건

Redux 혹은 Mobx, React 를 사용
나머지 스택은 상관없음

### 구현 목적

- Redux, Mobx, React와 같은 framework, library를 사용하는 이유, 설계 의의를 이해하고 그에 맞게 코드를 작성할 수 있는가

- application state를 Redux 혹은 Mobx에 맞게 설계할 수 있는가

### Installation guide

    # clone repo

        git clone https://github.com/callmedevmomo/react-redux-rps

    # change directory to your app

        cd react-redux-rps

    # install the dependencies with yarn

        yarn install

    # start the server

        yarn start

### 구현상세

- [x] n 세트를 먼저 이기는 플레이어가 한 게임 승리.
- [x] 1플레이어는 유저, 2플레이어는 컴퓨터
- [x] 컴퓨터는 랜덤으로 가위, 바위, 보를 낸다.
- [x] 시간이 전부 흐르기 전에 패를 고르면 결과가 바로 공개됨
- [x] 한 세트는 n판으로 구성
- [x] 결과가 보여지는 패널이 존재 (1set, n승, n패, 같은)
- [x] n승을 하면 한 세트 승리. n세트 승리시 , 최종 승자가 결정되고 게임종료
- [x] 재시작, 그만하기 존재

### 추가로 하면 좋은 것들

- [ ] 상대가 이미 고른 상태란 것을 표현해주기
- [ ] 각 플레이어가 제한된 시간 내에 가위, 바위, 보 를 선택하고 시간 제한이 끝나면 결과가 나옴.
- [ ] 가위,바위,보를 선택하지 않고 시간이 흐르면 유저의 패배

import React from "react";
import baro from "../img/baro.png";

class MM02 extends React.Component {
  render() {
    return (
      <div className="MM02">
        <div className="MM02__title">바로크(1650~1750)</div>
        <div className="MM02__desc">
          <div className="MM02__composer">주요 작곡가</div>
          <div className="MM02__composer__introduce">
            <p>클라우디오 몬테베르디 (1567 ~ 1643)</p>
            <p>하인리히 쉬츠 ( 1585 ~ 1672)</p>
            <p>요한 파헬벨 (1653 ~ 1706년)</p>
            <p>장필리프 라모 (1683 ~ 1764)</p>
            <p>장바티스트 륄리 (1632 ~ 1687)</p>
            <p>요한 제바스티안 바흐 (1685 ~ 1750)</p>
            <p>토마소 비탈리 (1663 ~ 1745)</p>
            <p>안토니오 비발디 (1678 ~ 1741)</p>
            <p>도메니코 스카를라티 (1685 ~ 1757)</p>
            <p>알레산드로 스카를라티 (1660 ~ 1725)</p>
            <p>토마소 알비노니 (1671 ~ 1751)</p>
            <p>아르칸젤로 코렐리 (1653 ~ 1713)</p>
            <p>프랑수아 쿠프렝 (1668 ~ 1733)</p>
            <p>지우제페 타르티니 (1692 ~ 1770)</p>
            <p>게오르크 필립 텔레만 (1681 ~ 1767)</p>
            <p>헨리 퍼셀 (1659 ~ 1695)</p>
            <p>게오르그 프리드리히 헨델 (1685 ~ 1759)</p>
          </div>
          <div className="MM02__point">특징</div>
          <div className="MM02__point__desc">
            <p>
              (1) 빠름과 느림, 셈과 여림, 합주와 독주, 밝음과 어둠 등 두가지의
              상호 대비 효과가 뚜렷하게 나타남.
            </p>
            <p>
              (2) 장조, 단조의 조성 체계가 확립이 되어 이후 악곡의 제목에는
              조성이 존재.
            </p>
            <p>(3) 다성 음악과 화성 음악이 공존함.</p>
            <p>(4) 오페라, 오라토리오, 칸타타 등 극음악이 탄생함.</p>
            <p>(5) 모음곡, 소나타, 협주곡 등 다양한 기악 음악이 발달함.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MM02;

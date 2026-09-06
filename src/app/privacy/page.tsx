import Link from "next/link";

export const metadata = {
  title: "개인정보처리방침 · GARIMTO",
  description:
    "가림토 스튜디오 공식 홈페이지 (garimto.kr) 의 개인정보처리방침입니다.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 leading-relaxed">
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-muted hover:text-foreground transition">
          ← 홈으로
        </Link>
      </nav>

      <header className="mb-10 border-b border-border/60 pb-6">
        <h1 className="text-3xl font-bold text-gradient-gold md:text-4xl">
          개인정보처리방침
        </h1>
        <p className="mt-4 text-sm text-muted">
          <strong className="text-foreground">가림토</strong>(이하 &ldquo;스튜디오&rdquo;)는
          공식 홈페이지 <strong>garimto.kr</strong> (이하 &ldquo;홈페이지&rdquo;) 이용자의
          개인정보를 소중히 다루며,{" "}
          「개인정보 보호법」 및 관련 법령을 준수하여 개인정보를 처리합니다.
        </p>
        <p className="mt-3 text-xs text-muted">
          시행일: 2026-09-06 · 최종 개정일: 2026-09-06
        </p>
        <div className="mt-5 rounded-md border-l-4 border-accent bg-accent-soft/40 px-4 py-3 text-xs text-muted">
          본 방침은 <strong>홈페이지(garimto.kr)</strong> 에 한해 적용되며,
          가림토가 서비스 중인 개별 게임 앱(예: <strong>바둑한판</strong> —
          baduk.garimto.kr)은 별도의 개인정보처리방침이 적용됩니다.
        </div>
      </header>

      <section className="space-y-10">
        {/* 제1조 */}
        <div>
          <h2 className="text-xl font-bold">
            제1조 (수집하는 개인정보 항목 및 수집 방법)
          </h2>
          <p className="mt-3 text-muted">
            홈페이지는 회원가입·로그인 기능을 제공하지 않으며, 이용자가 별도의
            개인정보를 입력하지 않습니다. 다만 이용자가 자발적으로 이메일로
            문의하거나 홈페이지에 접속하는 과정에서 아래 정보가 수집될 수
            있습니다.
          </p>
          <h3 className="mt-5 font-semibold">1. 자동 수집 항목 (홈페이지 접속 시)</h3>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
            <li>접속 IP 주소, 접속 일시, 접속 페이지 경로 (Referer)</li>
            <li>브라우저 종류, OS, 디바이스 유형, 화면 해상도</li>
            <li>서비스 이용 기록, 오류 로그</li>
          </ul>
          <h3 className="mt-5 font-semibold">
            2. 이용자가 자발적으로 제공하는 정보 (선택)
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
            <li>
              이메일 문의 시: 이메일 주소, 성함(선택), 문의 내용에 포함된 정보
            </li>
          </ul>
          <h3 className="mt-5 font-semibold">3. 수집 방법</h3>
          <ul className="mt-2 list-disc space-y-1 pl-6 text-muted">
            <li>홈페이지 이용 과정에서 자동으로 생성/수집되는 정보</li>
            <li>이용자가 이메일(garimtop1976@gmail.com) 로 직접 발송한 정보</li>
          </ul>
        </div>

        {/* 제2조 */}
        <div>
          <h2 className="text-xl font-bold">
            제2조 (개인정보의 수집 및 이용 목적)
          </h2>
          <ol className="mt-3 list-decimal space-y-2 pl-6 text-muted">
            <li>
              <strong className="text-foreground">홈페이지 운영</strong>: 서비스
              제공, 접속 통계 분석, 오류 진단, 성능 개선
            </li>
            <li>
              <strong className="text-foreground">문의 응대</strong>: 이용자
              문의·제휴·협업 요청에 대한 회신
            </li>
            <li>
              <strong className="text-foreground">보안</strong>: 부정 접근/공격
              차단, 서비스 안정성 유지
            </li>
            <li>
              <strong className="text-foreground">법령 준수</strong>: 관련
              법령에 따른 의무 이행
            </li>
          </ol>
        </div>

        {/* 제3조 */}
        <div>
          <h2 className="text-xl font-bold">
            제3조 (개인정보의 보유 및 이용 기간)
          </h2>
          <p className="mt-3 text-muted">
            수집된 개인정보는 목적 달성 후 지체 없이 파기하며, 아래 항목은 관련
            법령 및 서비스 운영 필요에 따라 아래 기간 동안 보관합니다.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border/60 text-left">
                  <th className="p-3 font-semibold">항목</th>
                  <th className="p-3 font-semibold">보관 기간</th>
                  <th className="p-3 font-semibold">근거</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border/40">
                  <td className="p-3">접속 로그, 접속 IP</td>
                  <td className="p-3">3개월</td>
                  <td className="p-3">통신비밀보호법</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="p-3">이메일 문의 내역</td>
                  <td className="p-3">문의 응대 완료 후 1년</td>
                  <td className="p-3">CS 이력 관리 및 재문의 대응</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="p-3">부정 접근/공격 기록</td>
                  <td className="p-3">1년</td>
                  <td className="p-3">부정 이용 방지</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 제4조 */}
        <div>
          <h2 className="text-xl font-bold">제4조 (개인정보의 제3자 제공)</h2>
          <p className="mt-3 text-muted">
            스튜디오는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
            다만, 아래의 경우는 예외로 합니다.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-muted">
            <li>이용자가 사전에 동의한 경우</li>
            <li>법령에 의거하거나 수사기관의 요구가 있는 경우</li>
          </ul>
        </div>

        {/* 제5조 */}
        <div>
          <h2 className="text-xl font-bold">제5조 (개인정보 처리의 위탁)</h2>
          <p className="mt-3 text-muted">
            홈페이지의 안정적 서비스 제공을 위해 아래와 같이 개인정보 처리
            업무를 위탁하고 있습니다.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border/60 text-left">
                  <th className="p-3 font-semibold">수탁업체</th>
                  <th className="p-3 font-semibold">위탁 업무</th>
                  <th className="p-3 font-semibold">국가</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border/40">
                  <td className="p-3">Vercel Inc.</td>
                  <td className="p-3">
                    홈페이지 웹 호스팅, CDN, SSL 인증서 발급 및 접속 로그 관리
                  </td>
                  <td className="p-3">미국</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="p-3">GitHub, Inc.</td>
                  <td className="p-3">홈페이지 소스코드 저장소 관리</td>
                  <td className="p-3">미국</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="p-3">Google LLC (Gmail)</td>
                  <td className="p-3">이메일 문의 수신 및 응대</td>
                  <td className="p-3">미국</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 제6조 */}
        <div>
          <h2 className="text-xl font-bold">
            제6조 (개인정보의 파기 절차 및 방법)
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-muted">
            <li>
              <strong className="text-foreground">파기 절차</strong>: 보유 기간
              경과 또는 처리 목적 달성 시, 별도의 데이터베이스에서 즉시 파기
              절차를 진행합니다.
            </li>
            <li>
              <strong className="text-foreground">파기 방법</strong>: 전자적
              파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적
              방법으로 삭제하며, 종이 문서는 분쇄 또는 소각하여 파기합니다.
            </li>
          </ul>
        </div>

        {/* 제7조 */}
        <div>
          <h2 className="text-xl font-bold">
            제7조 (이용자 및 법정대리인의 권리와 그 행사 방법)
          </h2>
          <p className="mt-3 text-muted">
            이용자는 언제든지 다음의 권리를 행사할 수 있으며, 스튜디오는 지체
            없이 조치합니다.
          </p>
          <ol className="mt-3 list-decimal space-y-1 pl-6 text-muted">
            <li>개인정보 열람 요구</li>
            <li>개인정보 정정 요구</li>
            <li>개인정보 삭제 요구</li>
            <li>개인정보 처리 정지 요구</li>
          </ol>
          <p className="mt-3 text-muted">
            위 권리 행사는 아래 개인정보 보호책임자에게 이메일로 요청할 수
            있습니다.
          </p>
        </div>

        {/* 제8조 */}
        <div>
          <h2 className="text-xl font-bold">제8조 (개인정보의 안전성 확보 조치)</h2>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-muted">
            <li>HTTPS(TLS) 를 통한 모든 통신 구간 암호화</li>
            <li>Vercel 인프라의 자동 보안 업데이트 및 DDoS 방어</li>
            <li>접근 권한 최소화 및 소스코드 저장소 접근 통제</li>
            <li>주기적인 보안 취약점 점검 및 소프트웨어 업데이트</li>
          </ul>
        </div>

        {/* 제9조 */}
        <div>
          <h2 className="text-xl font-bold">제9조 (쿠키 및 로컬 스토리지 사용)</h2>
          <p className="mt-3 text-muted">
            본 홈페이지는 별도의 로그인이 필요하지 않으며, 개인 식별을 위한 쿠키
            를 사용하지 않습니다. 다만 이용자의 원활한 서비스 이용을 위해 필요한
            최소한의 세션·기능 쿠키가 사용될 수 있으며, 브라우저 설정에서 언제든
            거부하실 수 있습니다.
          </p>
        </div>

        {/* 제10조 */}
        <div>
          <h2 className="text-xl font-bold">제10조 (개인정보 보호책임자)</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-border/60 text-left">
                  <th className="p-3 font-semibold">구분</th>
                  <th className="p-3 font-semibold">내용</th>
                </tr>
              </thead>
              <tbody className="text-muted">
                <tr className="border-b border-border/40">
                  <td className="p-3">상호</td>
                  <td className="p-3">가림토 (GARIMTO)</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="p-3">성명</td>
                  <td className="p-3">김종환</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="p-3">직책</td>
                  <td className="p-3">대표 / 개인정보 보호책임자</td>
                </tr>
                <tr className="border-b border-border/40">
                  <td className="p-3">이메일</td>
                  <td className="p-3">
                    <a
                      href="mailto:garimtop1976@gmail.com"
                      className="text-accent-strong underline-offset-2 hover:underline"
                    >
                      garimtop1976@gmail.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-5 rounded-md border-l-4 border-accent bg-accent-soft/40 px-4 py-3 text-xs text-muted">
            개인정보 침해에 대한 신고나 상담이 필요하신 경우, 아래 기관에
            문의하실 수 있습니다.
            <ul className="mt-2 space-y-1">
              <li>
                개인정보침해신고센터:{" "}
                <a
                  href="https://privacy.kisa.or.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  privacy.kisa.or.kr
                </a>{" "}
                · 국번없이 118
              </li>
              <li>
                대검찰청 사이버수사과:{" "}
                <a
                  href="https://spo.go.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  spo.go.kr
                </a>{" "}
                · 국번없이 1301
              </li>
              <li>
                경찰청 사이버수사국:{" "}
                <a
                  href="https://ecrm.police.go.kr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  ecrm.police.go.kr
                </a>{" "}
                · 국번없이 182
              </li>
            </ul>
          </div>
        </div>

        {/* 제11조 */}
        <div>
          <h2 className="text-xl font-bold">
            제11조 (개인정보처리방침의 변경)
          </h2>
          <p className="mt-3 text-muted">
            이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른
            변경 내용의 추가·삭제·정정이 있는 경우 변경사항 시행 7일 전부터
            홈페이지 공지사항을 통하여 고지합니다.
          </p>
        </div>

        {/* 부칙 */}
        <div>
          <h2 className="text-xl font-bold">부칙</h2>
          <p className="mt-3 text-muted">
            이 개인정보처리방침은 2026-09-06 부터 시행됩니다.
          </p>
        </div>
      </section>
    </main>
  );
}

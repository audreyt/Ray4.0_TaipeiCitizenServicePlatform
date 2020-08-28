// theme、themetab、organ、organtab一定要是array，而且不能少
// {
//   index: 0,
//   name: "案件1",
//   theme: ["生育托兒", "社會關懷"],
//   themetab: ["", "原住民"],
//   organ: ["民政局"],
//   organtab: [""],
//   apply: "線上 / 臨櫃",
//   day: 7,
//   info:
//     "【申請資格】<br />1.照顧五足歲以下兒童。<br />2.兒童及申請人設籍並實際居住臺北市（以下簡稱本市）一年以上。<br />3.申請人經稅捐稽徵機關核定之最近一年綜合所得總額合計未達申報標準或綜合所得稅稅率未達百分之二十。<br />4.兒童未經政府公費安置收容。<br />5.兒童未領有政府低收入戶生活補助、危機家庭兒童及少年生活補助或其他生活類之補助或津貼。<br /><br />【其他申請資格】<br /> 前項第二款之設籍本市一年以上，指申請日向前推算連續設籍本市一年以上。<br /> 符合下列情形之一者，兒童得不受第一項第二款設籍並實際居住本市一年以上之限制：<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(1)兒童未滿一歲，其出生登記或初設戶籍登記於本市，且戶籍未有遷出本市紀錄。<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(2)兒童經完成收養登記未滿一年，且戶籍遷入本市未有遷出紀錄。<br />兒童父母之一方為無戶籍國民、大陸地區人民或外國籍人士，得不受第一項第二款設籍本市之限制。",
//   file:
//     "請備齊以下文件：<br />(一)申請人親自申請：申請表、申請人之身分證、印章及金融機構存摺封面影本。<br />(二)委託他人代為申請：申請表、受託人之身分證及印章、申請人之身分證、親筆簽名或蓋章之委託書及金融機構存摺封面影本。<br />申請表置於檔案下載區。",
//   noonline: "請備齊應備文件向臺北市各區戶政事務所或各區公所社會課現場辦理。",
// },

const caseData = [
  {
    index: 0,
    name: "案件1",
    theme: ["生育托兒", "社會關懷"],
    themetab: ["", "原住民"],
    organ: ["民政局"],
    organtab: [""],
    apply: "線上 / 臨櫃",
    day: 7,
    info: [
      "【申請資格】<br /><br />1.照顧五足歲以下兒童。<br />2.兒童及申請人設籍並實際居住臺北市（以下簡稱本市）一年以上。<br />3.申請人經稅捐稽徵機關核定之最近一年綜合所得總額合計未達申報標準或綜合所得稅稅率未達百分之二十。<br />4.兒童未經政府公費安置收容。<br />5.兒童未領有政府低收入戶生活補助、危機家庭兒童及少年生活補助或其他生活類之補助或津貼。<br /><br />【其他申請資格】<br /><br />前項第二款之設籍本市一年以上",
      "指申請日向前推算連續設籍本市一年以上。<br /> 符合下列情形之一者",
      "兒童得不受第一項第二款設籍並實際居住本市一年以上之限制：<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(1)兒童未滿一歲",
      "其出生登記或初設戶籍登記於本市",
      "且戶籍未有遷出本市紀錄。<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(2)兒童經完成收養登記未滿一年",
      "且戶籍遷入本市未有遷出紀錄。<br />兒童父母之一方為無戶籍國民、大陸地區人民或外國籍人士",
      "得不受第一項第二款設籍本市之限制。",
    ],
    file:
      "請備齊以下文件：<br />(一)申請人親自申請：申請表、申請人之身分證、印章及金融機構存摺封面影本。<br />(二)委託他人代為申請：申請表、受託人之身分證及印章、申請人之身分證、親筆簽名或蓋章之委託書及金融機構存摺封面影本。<br />申請表置於檔案下載區。",
    臨櫃辦理: "請備齊應備文件向臺北市各區戶政事務所或各區公所社會課現場辦理。",
    noonline: "請備齊應備文件向臺北市各區戶政事務所或各區公所社會課現場辦理。",
    download: [
      "臺北市育兒津貼申請表（109年版本）.doc",
      "臺北市育兒津貼申請表（109年版本）.odt",
      "臺北市育兒津貼申請表（109年版本）.pdf",
    ],
  },
  {
    index: 1,
    name: "案件2",
    theme: ["生育托兒", "社會關懷"],
    themetab: ["", "中低收入戶"],
    organ: ["勞動局"],
    organtab: ["勞動局"],
    apply: "線上 / 線上 + 臨櫃",
    day: 7,
    info: [
      "【申請資格】<br />1.照顧五足歲以下兒童。<br />2.兒童及申請人設籍並實際居住臺北市（以下簡稱本市）一年以上。<br />3.申請人經稅捐稽徵機關核定之最近一年綜合所得總額合計未達申報標準或綜合所得稅稅率未達百分之二十。<br />4.兒童未經政府公費安置收容。<br />5.兒童未領有政府低收入戶生活補助、危機家庭兒童及少年生活補助或其他生活類之補助或津貼。<br /><br />【其他申請資格】<br /> 前項第二款之設籍本市一年以上",
      "指申請日向前推算連續設籍本市一年以上。<br /> 符合下列情形之一者",
      "兒童得不受第一項第二款設籍並實際居住本市一年以上之限制：<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(1)兒童未滿一歲",
      "其出生登記或初設戶籍登記於本市",
      "且戶籍未有遷出本市紀錄。<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp(2)兒童經完成收養登記未滿一年",
      "且戶籍遷入本市未有遷出紀錄。<br />兒童父母之一方為無戶籍國民、大陸地區人民或外國籍人士",
      "得不受第一項第二款設籍本市之限制。",
    ],
    file:
      "請備齊以下文件：<br />(一)申請人親自申請：申請表、申請人之身分證、印章及金融機構存摺封面影本。<br />(二)委託他人代為申請：申請表、受託人之身分證及印章、申請人之身分證、親筆簽名或蓋章之委託書及金融機構存摺封面影本。<br />申請表置於檔案下載區。",
    noonline: "請備齊應備文件向臺北市各區戶政事務所或各區公所社會課現場辦理。",
    download: [
      "臺北市育兒津貼申請表（109年版本）.doc",
      "臺北市育兒津貼申請表（109年版本）.odt",
      "臺北市育兒津貼申請表（109年版本）.pdf",
    ],
  },
  {
    index: 2,
    name: "案件3",
    theme: ["生育托兒"],
    themetab: [""],
    organ: ["民政局"],
    organtab: [""],
    apply: "線上 + 臨櫃 / 臨櫃",
    day: 10,
  },
  {
    index: 3,
    name: "案件4",
    theme: ["社會關懷", "生育托兒"],
    themetab: ["", "中低收入戶"],
    organ: ["民政局"],
    organtab: [""],
    apply: "線上 / 臨櫃",
    day: 7,
  },
];

export default caseData;

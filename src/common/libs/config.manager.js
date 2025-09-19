import dotenv from "dotenv";

export class ConfigManager {
  #configSpec = {
    ENV: { type: "string", default: "development" },
    PORT: { type: "number", default: 3000 },
    DATABASE_URL: { type: "string" },
    DISK_STORAGE_PATH: { type: "string", default: "public" },
  };

  constructor() {
    dotenv.config();
  }

  get(key) {
    const spec = this.#configSpec[key];
    if (!spec) {
      throw new Error(`${key}: 환경 변수 명세가 정의되지 않았습니다.`);
    }

    const { type, default: defaultValue } = spec;
    const value = process.env[key];

    if (value === undefined || value === null) {
      if (defaultValue !== undefined) {
        return defaultValue;
      }
      throw new Error(`${key}: 필수 환경 변수가 설정되지 않았습니다.`);
    }

    switch (type) {
      case "string":
        return value;
      case "number": {
        const numValue = Number(value);
        if (isNaN(numValue)) {
          throw new Error(`${key}: 환경 변수가 숫자 형식이 아닙니다.`);
        }
        return numValue;
      }
      case "boolean": {
        const lowerCaseValue = value.toLowerCase();
        if (lowerCaseValue !== "true" && lowerCaseValue !== "false") {
          throw new Error(`${key}: 환경 변수가 참/거짓 형식이 아닙니다.`);
        }
        return lowerCaseValue === "true";
      }
      default:
        throw new Error(`${key}: 지원되지 않는 타입의 환경 변수입니다.`);
    }
  }
}

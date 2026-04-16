import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const runtime = "edge";

export const alt = DATA.name;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const styles = {
  outerWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    backgroundColor: "#ffffff",
    position: "relative" as const,
  },
  middleWrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    backgroundColor: "#ffffff",
    position: "relative" as const,
    padding: "40px",
  },
  wrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column" as const,
    backgroundColor: "#fafafa",
    position: "relative" as const,
    padding: "40px",
    border: "1px solid #e5e5e5",
    borderRadius: "12px",
  },
  imageSection: {
    position: "absolute" as const,
    top: "40px",
    left: "40px",
    display: "flex",
    alignItems: "center",
    zIndex: 2,
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    height: "100%",
    width: "100%",
    position: "relative" as const,
    zIndex: 1,
  },
  image: {
    width: "140px",
    height: "140px",
    borderRadius: "24px",
    border: "4px solid #e5e5e5",
    objectFit: "cover" as const,
  },
  title: {
    fontFamily: "sans-serif",
    fontSize: "48px",
    fontWeight: "600",
    lineHeight: 1.1,
    textAlign: "left" as const,
    color: "#000000",
    marginBottom: "16px",
    letterSpacing: "-0.02em",
    maxWidth: "900px",
  },
  description: {
    fontSize: "20px",
    fontWeight: "400",
    lineHeight: 1.5,
    textAlign: "left" as const,
    maxWidth: "800px",
    color: "#404040",
    marginBottom: "32px",
  },
};

export default async function Image() {
  const imageUrl = DATA.avatarUrl
    ? new URL(DATA.avatarUrl, DATA.url).toString()
    : undefined;

  return new ImageResponse(
    (
      <div style={styles.outerWrapper}>
        <div style={styles.middleWrapper}>
          <div style={styles.wrapper}>
            {imageUrl && (
              <div style={styles.imageSection}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imageUrl} alt={DATA.name} style={styles.image} />
              </div>
            )}
            <div style={styles.mainContainer}>
              <div style={styles.title}>{DATA.name}</div>
              {DATA.description && (
                <div style={styles.description}>{DATA.description}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}

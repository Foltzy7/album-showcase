import { OrgEvent } from "../models/orgEvent";
import axios, { ResponseType } from "axios";

function buildUrl(path: string) {
  const apiHost = "http://localhost:8080";
  const formattedPath = path.charAt(0) === "/" ? path : `/${path}`;
  return `${apiHost}${formattedPath}`;
}

type GetParams = {
  date?: string;
};

export async function get(
  path: string,
  params: GetParams,
  responseType?: ResponseType
): Promise<OrgEvent[]> {
  // const apiToken = localStorage.getItem("accessToken");
  const apiToken = "someToken";
  const { data } = await axios.get(buildUrl(path), {
    ...(responseType && { responseType: responseType }),
    headers: { authorization: `Bearer ${apiToken}` },
  });
  return data;
}

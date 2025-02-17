// Mobile only stub. Might be able to get rid of this completely. TBD(peter)
import { Blockchain } from "@coral-xyz/common";

export namespace SearchParamsFor {
  export interface Plugin {
    props: { pluginUrl: string };
  }
  export interface Tab {
    props: {};
  }
  export interface Token {
    props: { address: string; blockchain: Blockchain };
  }
}

export type ExtensionSearchParams = { title?: string } & (
  | SearchParamsFor.Plugin
  | SearchParamsFor.Tab
  | SearchParamsFor.Token
);

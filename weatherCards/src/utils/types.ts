import React from "react";

export type { UseDynamicSVGImportOptions, IconProps }

interface UseDynamicSVGImportOptions {
  onCompleted?: (
    name: string,
    SvgIcon: React.FC<React.SVGProps<SVGSVGElement>>
  ) => void
  onError?: (err: Error) => void;
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string;
  onCompleted?: UseDynamicSVGImportOptions["onCompleted"];
  onError?: UseDynamicSVGImportOptions["onError"];
}
import React, { useState, useRef, useEffect } from "react"
import type { UseDynamicSVGImportOptions } from "./types"

export const useDynamicSVGImport = (name: string, options: UseDynamicSVGImportOptions = {}) => {
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error>()
  const { onCompleted, onError } = options

  useEffect(() => {
    setLoading(true)
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (
          await import(`../assets/icons/${name}.svg`)
        ).ReactComponent
        onCompleted?.(name, ImportedIconRef.current!)
      } catch (error) {
        let err = error as Error
        onError?.(err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    importIcon()
  }, [name, onCompleted, onError])

  return { error, loading, SvgIcon: ImportedIconRef.current }
}
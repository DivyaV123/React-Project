"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { CheckCircle, Info, CircleCheckBig ,Trash2} from "lucide-react"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, variant, ...props }) {
        let Icon
        switch (variant) {
          case 'success':
            Icon = CircleCheckBig
            break
          case 'info':
            Icon = Info
            break
          case 'delete':
            Icon = Trash2
            break
          default:
            Icon = null
        }

        return (
          <Toast key={id} {...props} variant={variant}>
            <div className="flex items-start space-x-4">
              {Icon && <Icon className="h-6 w-6 shrink-0" />}
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
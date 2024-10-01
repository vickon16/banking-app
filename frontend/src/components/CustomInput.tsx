import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { type UseFormReturn } from "react-hook-form";

interface CustomProps {
  form: UseFormReturn<any>;
  name: string;
  formLabel?: string;
  formDescription?: string;
  className?: string;
  formItemClassName?: string;
  formTargetClassName?: string;
  formLabelClassName?: string;
  formMessageClassName?: string;
  disabled?: boolean;
}

type ConditionalProps =
  | {
      type?: "text";
      placeholder: string;
    }
  | {
      type?: "email";
      placeholder: string;
    }
  | {
      type?: "number";
      placeholder: string;
    }
  | {
      type?: "password";
      placeholder: string;
    }
  | {
      type?: "textarea";
      placeholder: string;
    };

type CustomInputProps = CustomProps & ConditionalProps;

const CustomInput = ({
  form,
  name,
  formLabel,
  placeholder,
  type = "text",
  formDescription,
  className,
  formItemClassName,
  formTargetClassName,
  formLabelClassName,
  formMessageClassName,
  disabled,
}: CustomInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={cn("w-full", className)}>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem className={cn("w-full", formItemClassName)}>
            {formLabel && (
              <FormLabel className={cn("", formLabelClassName)}>
                {formLabel}
              </FormLabel>
            )}

            {(type === "text" || type === "email") && (
              <FormControl>
                <Input
                  type={type}
                  disabled={disabled}
                  placeholder={placeholder}
                  className={cn("", formTargetClassName)}
                  {...field}
                />
              </FormControl>
            )}

            {type === "password" && (
              <div className="relative w-full">
                <FormControl>
                  <Input
                    type={showPassword ? "text" : "password"}
                    disabled={disabled}
                    placeholder={placeholder}
                    className={cn("", formTargetClassName)}
                    {...field}
                  />
                </FormControl>

                {!showPassword ? (
                  <Eye
                    className="absolute right-3 top-[50%] size-4 shrink-0 translate-y-[-50%] transform cursor-pointer text-foreground sm:size-5"
                    onClick={() => setShowPassword(true)}
                  />
                ) : (
                  <EyeOff
                    className="absolute right-3 top-[50%] size-4 shrink-0 translate-y-[-50%] transform cursor-pointer text-foreground sm:size-5"
                    onClick={() => setShowPassword(false)}
                  />
                )}
              </div>
            )}

            {type === "number" && (
              <FormControl>
                <Input
                  type="number"
                  onWheel={(e) => e.currentTarget.blur()}
                  inputMode="numeric"
                  disabled={disabled}
                  placeholder={placeholder}
                  className={cn("", formTargetClassName)}
                  {...field}
                />
              </FormControl>
            )}

            {type === "textarea" && (
              <FormControl>
                <Textarea
                  placeholder={placeholder}
                  rows={5}
                  disabled={disabled}
                  className={cn("resize-none", formTargetClassName)}
                  {...field}
                />
              </FormControl>
            )}

            {formDescription && (
              <FormDescription>{formDescription}</FormDescription>
            )}
            <FormMessage className={cn("", formMessageClassName)} />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CustomInput;

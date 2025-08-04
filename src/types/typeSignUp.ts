export interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface AvatarUploadProps {
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  avatarFile: File | null;
}

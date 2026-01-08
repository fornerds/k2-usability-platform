# 프로젝트 컨벤션 가이드

## 목차
1. [프로젝트 개요](#프로젝트-개요)
2. [기술 스택](#기술-스택)
3. [프로젝트 구조](#프로젝트-구조)
4. [코딩 컨벤션](#코딩-컨벤션)
5. [컴포넌트 설계 원칙](#컴포넌트-설계-원칙)
6. [상태 관리](#상태-관리)
7. [스타일링](#스타일링)
8. [타입 정의](#타입-정의)
9. [파일 및 폴더 네이밍](#파일-및-폴더-네이밍)
10. [API 및 데이터 페칭](#api-및-데이터-페칭)
11. [에러 처리](#에러-처리)
12. [성능 최적화](#성능-최적화)

---

## 프로젝트 개요

이 프로젝트는 **관리자 페이지**로, CSR(Client-Side Rendering) 방식의 React 애플리케이션입니다.

### 핵심 원칙
- **CSR 방식**: 서버 사이드 렌더링 없이 클라이언트에서 모든 렌더링 수행
- **타입 안정성**: TypeScript를 통한 엄격한 타입 체크
- **컴포넌트 재사용성**: 아토믹 디자인 시스템과 컴파운드 컴포넌트 패턴 활용
- **명확한 관심사 분리**: 서버 상태와 클라이언트 상태의 명확한 구분

---

## 기술 스택

### 핵심 기술
- **React 18.3.1**: UI 라이브러리
- **TypeScript**: 타입 안정성
- **Vite 6.3.5**: 빌드 도구 및 개발 서버

### 상태 관리
- **React Query (TanStack Query)**: 서버 상태 관리
- **Zustand**: 클라이언트 상태 관리

### UI 라이브러리
- **Radix UI**: 접근성과 기능을 갖춘 헤드리스 UI 컴포넌트
- **Tailwind CSS 4.1.12**: 유틸리티 기반 CSS 프레임워크
- **Class Variance Authority (CVA)**: 컴포넌트 variant 관리
- **Lucide React**: 아이콘 라이브러리

### 기타
- **React Hook Form**: 폼 관리
- **Sonner**: 토스트 알림
- **Recharts**: 차트 라이브러리

---

## 프로젝트 구조

### 디렉토리 구조

```
src/
├── app/                          # 애플리케이션 메인 코드
│   ├── App.tsx                   # 루트 컴포넌트
│   ├── components/               # 페이지 컴포넌트 및 기능 컴포넌트
│   │   ├── ui/                   # 아토믹 디자인: Atoms & Molecules
│   │   │   ├── button.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── ...
│   │   ├── DashboardPage.tsx     # 페이지 컴포넌트 (Templates)
│   │   └── ...
│   ├── hooks/                    # 커스텀 훅
│   ├── stores/                   # Zustand 스토어
│   ├── services/                 # API 서비스 레이어
│   ├── types/                    # TypeScript 타입 정의
│   └── utils/                    # 유틸리티 함수
├── assets/                       # 정적 자산 (이미지, 폰트 등)
├── imports/                      # Figma에서 생성된 컴포넌트 (레거시)
└── styles/                       # 전역 스타일
    ├── index.css
    ├── tailwind.css
    └── theme.css
```

### 아토믹 디자인 시스템 구조

```
components/
├── ui/                           # Atoms & Molecules
│   ├── atoms/                    # 가장 작은 단위 컴포넌트
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Icon.tsx
│   ├── molecules/                # Atoms의 조합
│   │   ├── SearchBar.tsx
│   │   ├── FormField.tsx
│   │   └── Card.tsx
│   └── organisms/                # Molecules의 조합
│       ├── Header.tsx
│       ├── Sidebar.tsx
│       └── DataTable.tsx
├── templates/                    # Templates (페이지 레이아웃)
│   ├── DashboardLayout.tsx
│   └── AuthLayout.tsx
└── pages/                        # Pages (실제 페이지 컴포넌트)
    ├── DashboardPage.tsx
    ├── ReportsPage.tsx
    └── SurveyListPage.tsx
```

---

## 코딩 컨벤션

### TypeScript

#### 타입 정의
```typescript
// ✅ 좋은 예: 명확한 타입 정의
type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
};

interface ComponentProps {
  title: string;
  onAction?: () => void;
  children?: React.ReactNode;
}

// ❌ 나쁜 예: any 사용
function processData(data: any) {
  // ...
}
```

#### 함수 컴포넌트
```typescript
// ✅ 좋은 예: 명확한 타입과 기본값
type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  children: React.ReactNode;
};

export function Button({
  variant = 'primary',
  size = 'md',
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }))}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

### React 패턴

#### 컴포넌트 선언
```typescript
// ✅ 좋은 예: 함수 선언식 사용
export default function UserProfile({ userId }: { userId: string }) {
  // ...
}

// 또는 명명된 export
export function UserProfile({ userId }: UserProfileProps) {
  // ...
}
```

#### Props 타입 정의
```typescript
// ✅ 좋은 예: Props 타입을 별도로 정의
type UserCardProps = {
  user: User;
  onEdit?: (userId: string) => void;
  showActions?: boolean;
};

export function UserCard({ user, onEdit, showActions = true }: UserCardProps) {
  // ...
}
```

#### Hooks 사용
```typescript
// ✅ 좋은 예: 커스텀 훅으로 로직 분리
function useUserData(userId: string) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });
}

export function UserProfile({ userId }: { userId: string }) {
  const { data: user, isLoading } = useUserData(userId);
  // ...
}
```

---

## 컴포넌트 설계 원칙

### 1. 아토믹 디자인 시스템

#### Atoms (원자)
- 가장 작은 단위의 재사용 가능한 컴포넌트
- 예: Button, Input, Icon, Badge

```typescript
// src/app/components/ui/atoms/Button.tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/app/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        destructive: 'bg-destructive text-white',
        outline: 'border bg-background',
      },
      size: {
        default: 'h-9 px-4',
        sm: 'h-8 px-3',
        lg: 'h-10 px-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
```

#### Molecules (분자)
- Atoms의 조합으로 만들어진 컴포넌트
- 예: SearchBar, FormField, Card

```typescript
// src/app/components/ui/molecules/SearchBar.tsx
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { Search } from 'lucide-react';

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch?: () => void;
  placeholder?: string;
};

export function SearchBar({
  value,
  onChange,
  onSearch,
  placeholder = '검색...',
}: SearchBarProps) {
  return (
    <div className="flex gap-2">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1"
      />
      <Button onClick={onSearch} variant="outline" size="icon">
        <Search className="h-4 w-4" />
      </Button>
    </div>
  );
}
```

#### Organisms (유기체)
- Molecules와 Atoms의 복합적인 조합
- 예: Header, Sidebar, DataTable

```typescript
// src/app/components/ui/organisms/DataTable.tsx
import { Table } from '../atoms/Table';
import { Button } from '../atoms/Button';
import { SearchBar } from '../molecules/SearchBar';

type DataTableProps<T> = {
  data: T[];
  columns: ColumnDef<T>[];
  onRowClick?: (row: T) => void;
};

export function DataTable<T>({ data, columns, onRowClick }: DataTableProps<T>) {
  const [searchQuery, setSearchQuery] = useState('');
  
  // ...
}
```

### 2. 컴파운드 컴포넌트 패턴

복잡한 컴포넌트는 컴파운드 패턴을 사용하여 유연성을 제공합니다.

```typescript
// src/app/components/ui/dialog.tsx (예시)
import * as DialogPrimitive from '@radix-ui/react-dialog';

// Root 컴포넌트
function Dialog({ ...props }: DialogPrimitive.DialogProps) {
  return <DialogPrimitive.Root {...props} />;
}

// Sub-components
function DialogTrigger({ ...props }: DialogPrimitive.TriggerProps) {
  return <DialogPrimitive.Trigger {...props} />;
}

function DialogContent({ ...props }: DialogPrimitive.ContentProps) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay />
      <DialogPrimitive.Content {...props} />
    </DialogPrimitive.Portal>
  );
}

function DialogHeader({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} />;
}

function DialogFooter({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} />;
}

// Export as compound component
export const Dialog = {
  Root: Dialog,
  Trigger: DialogTrigger,
  Content: DialogContent,
  Header: DialogHeader,
  Footer: DialogFooter,
};

// 사용 예시
<Dialog.Root>
  <Dialog.Trigger>열기</Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header>제목</Dialog.Header>
    내용
    <Dialog.Footer>버튼</Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
```

### 3. 컴포넌트 작성 가이드라인

#### 단일 책임 원칙
- 각 컴포넌트는 하나의 명확한 책임만 가져야 합니다.
- 복잡한 로직은 커스텀 훅으로 분리합니다.

#### Props 설계
```typescript
// ✅ 좋은 예: 명확하고 필수적인 props만
type CardProps = {
  title: string;              // 필수
  description?: string;       // 선택
  onAction?: () => void;      // 선택
  variant?: 'default' | 'highlighted';
};

// ❌ 나쁜 예: 너무 많은 props
type CardProps = {
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  icon?: React.ReactNode;
  actions?: Array<{ label: string; onClick: () => void }>;
  // ... 10개 이상의 props
};
```

#### 컴포넌트 크기
- 하나의 파일에 200줄을 넘지 않도록 합니다.
- 복잡한 컴포넌트는 작은 단위로 분리합니다.

---

## 상태 관리

### 서버 상태: React Query

서버에서 가져오는 모든 데이터는 React Query로 관리합니다.

#### 설치 및 설정
```bash
npm install @tanstack/react-query
```

#### QueryClient 설정
```typescript
// src/app/providers/QueryProvider.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5분
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export function QueryProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
```

#### API 서비스 레이어
```typescript
// src/app/services/api/userService.ts
import { User } from '@/app/types';

export const userService = {
  getUsers: async (): Promise<User[]> => {
    const response = await fetch('/api/users');
    if (!response.ok) throw new Error('Failed to fetch users');
    return response.json();
  },

  getUser: async (id: string): Promise<User> => {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) throw new Error('Failed to fetch user');
    return response.json();
  },

  createUser: async (user: Omit<User, 'id'>): Promise<User> => {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    if (!response.ok) throw new Error('Failed to create user');
    return response.json();
  },
};
```

#### 커스텀 훅 사용
```typescript
// src/app/hooks/useUsers.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { userService } from '@/app/services/api/userService';

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: userService.getUsers,
  });
}

export function useUser(userId: string) {
  return useQuery({
    queryKey: ['users', userId],
    queryFn: () => userService.getUser(userId),
    enabled: !!userId,
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: userService.createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}
```

#### 컴포넌트에서 사용
```typescript
// src/app/components/UserList.tsx
import { useUsers, useCreateUser } from '@/app/hooks/useUsers';

export function UserList() {
  const { data: users, isLoading, error } = useUsers();
  const createUser = useCreateUser();

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생</div>;

  return (
    <div>
      {users?.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
```

### 클라이언트 상태: Zustand

UI 상태, 폼 상태, 모달 상태 등 클라이언트에서만 관리되는 상태는 Zustand를 사용합니다.

#### 설치
```bash
npm install zustand
```

#### 스토어 정의
```typescript
// src/app/stores/uiStore.ts
import { create } from 'zustand';

type UIState = {
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
  modals: {
    [key: string]: boolean;
  };
};

type UIActions = {
  toggleSidebar: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  openModal: (modalId: string) => void;
  closeModal: (modalId: string) => void;
};

export const useUIStore = create<UIState & UIActions>((set) => ({
  // State
  sidebarOpen: false,
  theme: 'light',
  modals: {},

  // Actions
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setTheme: (theme) => set({ theme }),
  openModal: (modalId) =>
    set((state) => ({
      modals: { ...state.modals, [modalId]: true },
    })),
  closeModal: (modalId) =>
    set((state) => {
      const newModals = { ...state.modals };
      delete newModals[modalId];
      return { modals: newModals };
    }),
}));
```

#### 컴포넌트에서 사용
```typescript
// src/app/components/Sidebar.tsx
import { useUIStore } from '@/app/stores/uiStore';

export function Sidebar() {
  const { sidebarOpen, toggleSidebar } = useUIStore();

  if (!sidebarOpen) return null;

  return (
    <aside>
      {/* Sidebar content */}
      <button onClick={toggleSidebar}>닫기</button>
    </aside>
  );
}
```

#### 폼 상태 관리 예시
```typescript
// src/app/stores/formStore.ts
import { create } from 'zustand';

type FormState = {
  formData: {
    [formId: string]: Record<string, unknown>;
  };
  errors: {
    [formId: string]: Record<string, string>;
  };
};

type FormActions = {
  setFieldValue: (formId: string, field: string, value: unknown) => void;
  setFieldError: (formId: string, field: string, error: string) => void;
  resetForm: (formId: string) => void;
};

export const useFormStore = create<FormState & FormActions>((set) => ({
  formData: {},
  errors: {},

  setFieldValue: (formId, field, value) =>
    set((state) => ({
      formData: {
        ...state.formData,
        [formId]: {
          ...state.formData[formId],
          [field]: value,
        },
      },
    })),

  setFieldError: (formId, field, error) =>
    set((state) => ({
      errors: {
        ...state.errors,
        [formId]: {
          ...state.errors[formId],
          [field]: error,
        },
      },
    })),

  resetForm: (formId) =>
    set((state) => {
      const newFormData = { ...state.formData };
      const newErrors = { ...state.errors };
      delete newFormData[formId];
      delete newErrors[formId];
      return { formData: newFormData, errors: newErrors };
    }),
}));
```

### 상태 관리 가이드라인

#### 언제 무엇을 사용할까?

**React Query 사용:**
- 서버에서 가져오는 데이터
- 캐싱이 필요한 데이터
- 백그라운드 동기화가 필요한 데이터
- 예: 사용자 목록, 리포트 데이터, 설문지 목록

**Zustand 사용:**
- UI 상태 (사이드바 열림/닫힘, 모달 상태)
- 폼 상태 (로컬 폼 데이터)
- 사용자 설정 (테마, 언어)
- 임시 상태 (드래그 앤 드롭, 선택된 항목)

**useState 사용:**
- 컴포넌트 내부에서만 사용되는 간단한 상태
- 다른 컴포넌트와 공유할 필요가 없는 상태

---

## 스타일링

### Tailwind CSS

#### 기본 원칙
- 유틸리티 클래스를 우선 사용합니다.
- 반복되는 스타일은 컴포넌트로 추출합니다.
- 커스텀 클래스는 `@apply`를 사용하여 정의합니다.

#### 클래스 네이밍
```typescript
// ✅ 좋은 예: 의미 있는 클래스 조합
<div className="flex items-center justify-between gap-4 p-4 bg-white rounded-lg shadow-sm">
  <h2 className="text-lg font-semibold text-gray-900">제목</h2>
  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    액션
  </button>
</div>

// ❌ 나쁜 예: 인라인 스타일
<div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
```

#### CVA (Class Variance Authority) 사용
```typescript
// src/app/components/ui/Button.tsx
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/app/utils';

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
```

#### cn 유틸리티 함수
```typescript
// src/app/utils/cn.ts
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 반응형 디자인
```typescript
// Tailwind의 반응형 브레이크포인트 사용
<div className="
  grid
  grid-cols-1
  sm:grid-cols-2
  md:grid-cols-3
  lg:grid-cols-4
  gap-4
  p-4
  sm:p-6
  lg:p-8
">
  {/* Content */}
</div>
```

---

## 타입 정의

### 타입 파일 구조
```typescript
// src/app/types/index.ts
export type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'viewer';
  createdAt: string;
  updatedAt: string;
};

export type Report = {
  id: string;
  name: string;
  brand: string;
  category: string;
  status: '대응 중' | '완료';
  createdAt: string;
};

export type Survey = {
  id: string;
  name: string;
  status: '신청' | '업로드' | '종료';
  // ...
};
```

### API 응답 타입
```typescript
// src/app/types/api.ts
export type ApiResponse<T> = {
  data: T;
  message?: string;
  success: boolean;
};

export type PaginatedResponse<T> = {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
};

export type ApiError = {
  message: string;
  code?: string;
  details?: Record<string, unknown>;
};
```

---

## 파일 및 폴더 네이밍

### 파일 네이밍
- **컴포넌트 파일**: PascalCase (예: `UserProfile.tsx`, `DataTable.tsx`)
- **유틸리티 파일**: camelCase (예: `formatDate.ts`, `apiClient.ts`)
- **타입 파일**: camelCase (예: `userTypes.ts`, `apiTypes.ts`)
- **스토어 파일**: camelCase + Store 접미사 (예: `uiStore.ts`, `formStore.ts`)
- **훅 파일**: camelCase + use 접두사 (예: `useUsers.ts`, `useAuth.ts`)

### 폴더 네이밍
- **컴포넌트 폴더**: kebab-case 또는 PascalCase (예: `user-profile/` 또는 `UserProfile/`)
- **기타 폴더**: kebab-case (예: `api-services/`, `utils/`)

### Export 규칙
```typescript
// ✅ 좋은 예: 명명된 export 사용
export function Button() { }
export type ButtonProps = { };

// ✅ 좋은 예: default export는 페이지 컴포넌트에만
export default function DashboardPage() { }

// ❌ 나쁜 예: 일반 컴포넌트에 default export 남용
export default function Button() { }
```

---

## API 및 데이터 페칭

### API 클라이언트 설정
```typescript
// src/app/services/api/client.ts
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const token = localStorage.getItem('authToken');

    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'GET' });
  }

  async post<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data?: unknown): Promise<T> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: 'DELETE' });
  }
}

export const apiClient = new ApiClient(API_BASE_URL);
```

### 서비스 레이어
```typescript
// src/app/services/api/userService.ts
import { apiClient } from './client';
import { User, ApiResponse, PaginatedResponse } from '@/app/types';

export const userService = {
  getUsers: async (): Promise<User[]> => {
    const response = await apiClient.get<ApiResponse<User[]>>('/users');
    return response.data;
  },

  getUser: async (id: string): Promise<User> => {
    const response = await apiClient.get<ApiResponse<User>>(`/users/${id}`);
    return response.data;
  },

  createUser: async (user: Omit<User, 'id'>): Promise<User> => {
    const response = await apiClient.post<ApiResponse<User>>('/users', user);
    return response.data;
  },

  updateUser: async (id: string, user: Partial<User>): Promise<User> => {
    const response = await apiClient.put<ApiResponse<User>>(`/users/${id}`, user);
    return response.data;
  },

  deleteUser: async (id: string): Promise<void> => {
    await apiClient.delete(`/users/${id}`);
  },
};
```

---

## 에러 처리

### React Query 에러 처리
```typescript
// src/app/hooks/useUsers.ts
import { useQuery } from '@tanstack/react-query';
import { userService } from '@/app/services/api/userService';
import { toast } from 'sonner';

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: userService.getUsers,
    onError: (error) => {
      toast.error('사용자 목록을 불러오는데 실패했습니다.');
      console.error('Error fetching users:', error);
    },
  });
}
```

### 컴포넌트 에러 바운더리
```typescript
// src/app/components/ErrorBoundary.tsx
import { Component, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

type State = {
  hasError: boolean;
  error?: Error;
};

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">오류가 발생했습니다</h2>
              <p className="text-gray-600 mb-4">
                {this.state.error?.message || '알 수 없는 오류가 발생했습니다.'}
              </p>
              <button
                onClick={() => this.setState({ hasError: false })}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                다시 시도
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
```

---

## 성능 최적화

### React.memo 사용
```typescript
// 불필요한 리렌더링 방지
import { memo } from 'react';

export const UserCard = memo(function UserCard({ user }: { user: User }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
});
```

### useMemo, useCallback 사용
```typescript
import { useMemo, useCallback } from 'react';

export function UserList({ users, onUserClick }: UserListProps) {
  // 비용이 큰 계산은 useMemo로 메모이제이션
  const sortedUsers = useMemo(() => {
    return [...users].sort((a, b) => a.name.localeCompare(b.name));
  }, [users]);

  // 자식 컴포넌트에 전달하는 함수는 useCallback으로 메모이제이션
  const handleClick = useCallback((userId: string) => {
    onUserClick(userId);
  }, [onUserClick]);

  return (
    <div>
      {sortedUsers.map((user) => (
        <UserCard key={user.id} user={user} onClick={() => handleClick(user.id)} />
      ))}
    </div>
  );
}
```

### 코드 스플리팅
```typescript
// React.lazy를 사용한 동적 임포트
import { lazy, Suspense } from 'react';

const DashboardPage = lazy(() => import('./components/DashboardPage'));
const ReportsPage = lazy(() => import('./components/ReportsPage'));

function App() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
    </Suspense>
  );
}
```

---

## 추가 권장사항

### 1. 환경 변수 관리
```typescript
// .env 파일
VITE_API_BASE_URL=https://api.example.com
VITE_APP_NAME=K2 Usability Platform

// 사용
const apiUrl = import.meta.env.VITE_API_BASE_URL;
```

### 2. 상수 관리
```typescript
// src/app/constants/index.ts
export const ROUTES = {
  DASHBOARD: '/dashboard',
  REPORTS: '/reports',
  SURVEYS: '/surveys',
} as const;

export const QUERY_KEYS = {
  USERS: ['users'] as const,
  USER: (id: string) => ['users', id] as const,
  REPORTS: ['reports'] as const,
} as const;
```

### 3. 유틸리티 함수
```typescript
// src/app/utils/formatDate.ts
import { format } from 'date-fns';

export function formatDate(date: string | Date, formatStr = 'yyyy.MM.dd'): string {
  return format(new Date(date), formatStr);
}

// src/app/utils/validate.ts
export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

### 4. 접근성 (a11y)
- 모든 인터랙티브 요소에 적절한 ARIA 속성 추가
- 키보드 네비게이션 지원
- 스크린 리더를 고려한 시맨틱 HTML 사용

```typescript
// ✅ 좋은 예
<button
  aria-label="사용자 삭제"
  aria-describedby="delete-help-text"
  onClick={handleDelete}
>
  삭제
</button>
<span id="delete-help-text" className="sr-only">
  이 작업은 되돌릴 수 없습니다
</span>
```

---

## 체크리스트

새로운 기능을 추가할 때 다음을 확인하세요:

- [ ] TypeScript 타입이 올바르게 정의되었는가?
- [ ] 컴포넌트가 아토믹 디자인 시스템을 따르는가?
- [ ] 서버 상태는 React Query로 관리되는가?
- [ ] 클라이언트 상태는 Zustand로 관리되는가?
- [ ] 에러 처리가 적절히 구현되었는가?
- [ ] 접근성을 고려했는가?
- [ ] 반응형 디자인이 적용되었는가?
- [ ] 불필요한 리렌더링이 없는가?
- [ ] 코드가 200줄을 넘지 않는가?
- [ ] 적절한 네이밍 컨벤션을 따르는가?

---

## 참고 자료

- [React 공식 문서](https://react.dev)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs/)
- [TanStack Query 문서](https://tanstack.com/query/latest)
- [Zustand 문서](https://docs.pmnd.rs/zustand)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Radix UI 문서](https://www.radix-ui.com)
- [아토믹 디자인 시스템](https://bradfrost.com/blog/post/atomic-web-design/)

---

**마지막 업데이트**: 2024년


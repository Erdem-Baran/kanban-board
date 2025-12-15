# 📋 Modern Kanban Board

React, TypeScript ve Tailwind CSS v4 kullanılarak geliştirilmiş, sürükle-bırak (Drag & Drop) özellikli, tema destekli modern bir Kanban Panosu uygulaması.


## ✨ Özellikler

-   **Sürükle & Bırak (Drag & Drop):** `@dnd-kit` altyapısı ile görevleri sütunlar arasında pürüzsüzce taşıyın.
-   **Karanlık & Aydınlık Mod:** Kullanıcı tercihini hatırlayan (localStorage) ve Tailwind CSS v4 ile güçlendirilmiş tema desteği.
-   **Görev Yönetimi:** Kolayca yeni görevler ekleyin ve durumlarını yönetin.
-   **Feature-Based Mimari:** Ölçeklenebilir, modüler ve bakımı kolay dosya yapısı.
-   **Responsive Tasarım:** Mobil ve masaüstü uyumlu modern arayüz.

## 🛠️ Teknolojiler

Bu proje aşağıdaki teknolojilerle oluşturulmuştur:

-   **[React 19](https://react.dev/)** - UI Kütüphanesi
-   **[TypeScript](https://www.typescriptlang.org/)** - Tip güvenliği
-   **[Vite](https://vitejs.dev/)** - Hızlı geliştirme ortamı ve build aracı
-   **[Tailwind CSS v4](https://tailwindcss.com/)** - Stil işlemleri
-   **[@dnd-kit/core](https://dndkit.com/)** - Sürükle ve bırak mantığı
-   **[React Icons](https://react-icons.github.io/react-icons/)** - İkon seti

## 🚀 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1.  **Projeyi klonlayın:**
    ```bash
    git clone (https://github.com/Erdem-Baran/kanban-board.git)
    cd kanban-board
    ```

2.  **Bağımlılıkları yükleyin:**
    ```bash
    npm install
    # veya
    yarn install
    ```

3.  **Geliştirme sunucusunu başlatın:**
    ```bash
    npm run dev
    # veya
    yarn dev
    ```

4.  Tarayıcınızda `http://localhost:5173` adresine gidin.

## 📂 Proje Yapısı

Proje, sürdürülebilirlik ve ölçeklenebilirlik için **Feature-Based (Özellik Tabanlı)** klasör yapısını kullanır:

```text
src/
├── assets/                  # Statik dosyalar (Resimler vb.)
├── components/              # Uygulama geneli bileşenler
│   ├── common/              # Draggable, Droppable gibi genel UI parçaları
│   └── layout/              # MainLayout gibi düzen bileşenleri
├── features/                # İş mantığı (Domain Logic)
│   └── kanban/              # Kanban özelliğine ait her şey
│       ├── components/      # TaskCard, KanbanColumn, Form...
│       ├── hooks/           # useKanban (State ve mantık)
│       └── types/           # Kanban'a özel tipler (Task interface)
├── hooks/                   # Global hook'lar (useTheme)
├── App.tsx                  # Ana uygulama bileşeni
└── main.tsx                 # Giriş noktası

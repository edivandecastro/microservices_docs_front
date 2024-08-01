import { Newspaper, Menu, Search, CircleUser, Square, SquareCheckBig } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

function App() {

  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="flex items-center sticky top-0 border-b h-16 gap-4 bg-background px-4 md:px-6">
        <nav className="hidden
                        flex-col
                        gap-6
                        text-lg
                        font-medium
                        md:flex
                        md:flex-row
                        md:items-center
                        md:gap-5
                        md:text-sm
                        lg:gap-6"
        >
          <a href="#" className="">
            <Newspaper className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
            Attribute Specifications
          </a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
            Orders
          </a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
            Products
          </a>
          <a href="#" className="text-muted-foreground transition-colors hover:text-foreground">
            Customers
          </a>
          <a href="#" className="text-foreground transition-colors hover:text-foreground">
            Settings
          </a>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <a href="#" className="flex items-center gap-2 text-lg font-semibold">
                <Newspaper className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Dashboard
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Orders
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Products
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                Customers
              </a>
              <a href="#" className="hover:text-foreground">
                Settings
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex
                       min-h-[calc(100vh_-_theme(spacing.16))]
                       flex-1
                       flex-col
                       gap-4
                       bg-muted/40
                       p-4
                       md:gap-8
                       md:p-10">
        <Card x-chunk="table">
          <CardHeader>
            <CardTitle>Attribute Specifications</CardTitle>
            <CardDescription>
              Este documento é um documento embutido em <span className="px-1 rounded-md border-solid text-orange-500 bg-slate-100 font-medium">
                activity_fields
              </span> nele é especificado o nome dos atributos de um elemento HTML.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome do Campo</TableHead>
                  <TableHead>Descrição</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Exemplo de Valores</TableHead>
                  <TableHead className="flex justify-center items-center">Obrigatório</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>name</TableCell>
                  <TableCell>Nome que identifica o atributo HTML;</TableCell>
                  <TableCell>String</TableCell>
                  <TableCell>maxlength</TableCell>
                  <TableCell className="flex justify-center"><SquareCheckBig className="h-5 w-5 text-green-800" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>attribute_type</TableCell>
                  <TableCell>Define o tipo do atributo;</TableCell>
                  <TableCell>String</TableCell>
                  <TableCell>String</TableCell>
                  <TableCell className="flex justify-center"><SquareCheckBig className="h-5 w-5 text-green-800" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>value</TableCell>
                  <TableCell>Nesse campo é informado o valor do atributo. <br />
                    Ex. Se foi cadastrado no campo name um atributo chamado placeholder,
                    no campo value é colocado o texto "Informe o seu email"
                  </TableCell>
                  <TableCell>String</TableCell>
                  <TableCell></TableCell>
                  <TableCell className="flex justify-center"><Square className="h-5 w-5 text-green-800" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>values_options</TableCell>
                  <TableCell>Nesse campo pode ser colocado uma lista de valores padrões;</TableCell>
                  <TableCell>Array</TableCell>
                  <TableCell></TableCell>
                  <TableCell className="flex justify-center"><Square className="h-5 w-5 text-green-800" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>required</TableCell>
                  <TableCell>Esse campo garante se o atributo é de preenchimento obrigatório;</TableCell>
                  <TableCell>Boolean</TableCell>
                  <TableCell></TableCell>
                  <TableCell className="flex justify-center"><SquareCheckBig className="h-5 w-5 text-green-800" /></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>descriptions</TableCell>
                  <TableCell>Nesse campo pode ser colocado um texto para ajudar o usuário a preencher o campo.< br />
                    Essa descrição deve ser localizada.
                  </TableCell>
                  <TableCell>String</TableCell>
                  <TableCell></TableCell>
                  <TableCell className="flex justify-center"><Square className="h-5 w-5 text-green-800" /></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div >
  )
}

export default App

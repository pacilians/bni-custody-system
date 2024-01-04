"use client";

import { addSecurities } from "../actions";
// import { BankAccount, DOB } from "../components/Columns";

// componets
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// libs
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type Service = {
  id: number;
  name: string;
};

export default function CreateForm({ customer = [] }: any) {
  const router = useRouter();
  const form = useForm();
  const { pending } = useFormStatus();

  return (
    <section className="bg-base-200 flex-column flex w-full justify-center rounded-3xl p-10 shadow-md">
      <Form {...form}>
        <form
          action={async (formData: FormData) => {
            toast.promise(addSecurities(formData), {
              loading: "Creating..",
              success: (data) => {
                router.push("/securities-account");
                return `Successfull creating securities account`;
              },
              error: (err) => {
                return `Failed creating securities account`;
              },
            });
          }}
          className="flex w-full flex-col gap-2"
        >
          <div className="flex flex-row justify-center gap-3">
            <FormField
              control={form.control}
              name="id_customer"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="role">
                    Customer *
                  </label>
                  <Select {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Customer" />
                    </SelectTrigger>
                    <SelectContent>
                      {customer.map((obj: any, key: any) => (
                        <SelectItem key={key} value={obj.name}>
                          {obj.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="kode_bk"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="name">
                    Kode BK *
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="...."
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="no_rekening_investor"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="name">
                    No Rekening Investor *
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="..."
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />
          </div>

          <div className="mt-1 flex flex-row justify-center gap-3">
            <FormField
              control={form.control}
              name="nama_awal"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="nama_awal">
                    Nama/Nama Perusahaan *
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="..."
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nama_tengah"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="nama_tengah">
                    Nama Tengah
                  </label>
                  <Input
                    type="text"
                    placeholder="..."
                    required
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="nama_belakang"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label
                    className="mb-2 block font-bold"
                    htmlFor="nama_belakang"
                  >
                    Nama Belakang
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="..."
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />
          </div>

          <div className="mt-1 flex flex-row justify-center gap-3">
            <FormField
              control={form.control}
              name="nama_perusahaan"
              render={({ field }) => (
                <FormItem className="w-2/3">
                  <label
                    className="mb-2 block font-bold"
                    htmlFor="nama_perusahaan"
                  >
                    Nama Perusahaan
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="...."
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />
          </div>

          <div className="mt-1 flex flex-row justify-center gap-3">
            <FormField
              control={form.control}
              name="ktp"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="ktp">
                    KTP
                  </label>
                  <Input
                    type="text"
                    
                    placeholder="..."
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="npwp"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="npwp">
                    NPWP
                  </label>
                  <Input
                    type="text"
                    placeholder="..."
                    
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="no_paspor"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="no_paspor">
                    No Paspor
                  </label>
                  <Input
                    type="text"
                    
                    placeholder="..."
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />
          </div>

          <div className="mt-1 flex flex-row justify-center gap-3">
            <FormField
              control={form.control}
              name="no_pendaftaran_usaha"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label
                    className="mb-2 block font-bold"
                    htmlFor="no_pendaftaran_usaha"
                  >
                    No Pendaftaran Usaha
                  </label>
                  <Input
                    type="text"
                    
                    placeholder="..."
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tanggal_pendirian"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label
                    className="mb-2 block font-bold"
                    htmlFor="tanggal_pendirian"
                  >
                    Tanggal Lahir/Pendirian Perusahaan
                  </label>
                  <Input
                    type="date"
                    placeholder="..."
                    required
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tempat_pendirian"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label
                    className="mb-2 block font-bold"
                    htmlFor="tempat_pendirian"
                  >
                    Tempat Lahir/Pendirian Perusahaan
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="..."
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />
          </div>

          <div className="mt-1 flex flex-row justify-center gap-3">
            <FormField
              control={form.control}
              name="tipe_investor"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label
                    className="mb-2 block font-bold"
                    htmlFor="tipe_investor"
                  >
                    Tipe Investor *
                  </label>
                  <Select {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Tipe Investor" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Others (Lainnya)</SelectItem>
                      <SelectItem value="2">CP: Corporate</SelectItem>
                      <SelectItem value="3">FD: Foundation</SelectItem>
                      <SelectItem value="4">
                        IB: Financial institution
                      </SelectItem>
                      <SelectItem value="5">IS: Insurance</SelectItem>
                      <SelectItem value="6">MF: Mutual Fund</SelectItem>
                      <SelectItem value="7">PF: Pension Fund</SelectItem>
                      <SelectItem value="8">SC: Securities Company</SelectItem>
                      <SelectItem value="9">ID: Individual</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="jenis_kelamin"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label
                    className="mb-2 block font-bold"
                    htmlFor="jenis_kelamin"
                  >
                    Jenis Kelamin 
                  </label>
                  <Select {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Jenis Kelamin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Laki - Laki (Male)</SelectItem>
                      <SelectItem value="2">Perempuan (Female)</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="jenis_pekerjaan"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label
                    className="mb-2 block font-bold"
                    htmlFor="jenis_pekerjaan"
                  >
                    Jenis Pekerjaan 
                  </label>
                  <Select {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Jenis Kelamin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">PNS</SelectItem>
                      <SelectItem value="2">TNI/Porli</SelectItem>
                      <SelectItem value="3">Wiraswasta</SelectItem>
                      <SelectItem value="4">Pegawai Swasta</SelectItem>
                      <SelectItem value="5">Ibu Rumah Tangga</SelectItem>
                      <SelectItem value="6">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>

          <div className="mt-1 flex flex-row justify-center gap-3">
            <FormField
              control={form.control}
              name="alamat_identitas_1"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label
                    className="mb-2 block font-bold"
                    htmlFor="alamat_identitas_1"
                  >
                    Alamat Identitas 1 *
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="..."
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="alamat_identitas_2"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label
                    className="mb-2 block font-bold"
                    htmlFor="alamat_identitas_2"
                  >
                    Alamat Identitas 2
                  </label>
                  <Input
                    type="text"
                    placeholder="..."
                    
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />
          </div>

          <div className="mt-1 flex flex-row justify-center gap-3">
            <FormField
              control={form.control}
              name="kode_kota"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="kode_kota">
                    Kode Kota *
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="..."
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="kode_provinsi"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label
                    className="mb-2 block font-bold"
                    htmlFor="kode_provinsi"
                  >
                    Kode Provinsi *
                  </label>
                  <Input
                    type="text"
                    placeholder="..."
                    required
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="kode_negara"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="kode_negara">
                    Kode Negara *
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="..."
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />
          </div>

          <div className="mt-1 flex flex-row justify-center gap-3">
            <FormField
              control={form.control}
              name="no_telepon"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="no_telepon">
                    No Telepon
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="..."
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="no_hp"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="no_hp">
                    No HP
                  </label>
                  <Input
                    type="text"
                    placeholder="..."
                    required
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-1/3">
                  <label className="mb-2 block font-bold" htmlFor="email">
                    Email
                  </label>
                  <Input
                    type="text"
                    required
                    placeholder="..."
                    {...field}
                    className="w-full border-gray-200 bg-white px-10 dark:border-gray-900 dark:bg-gray-900/60 "
                  />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-row justify-center">
            <Button
              type="submit"
              className="group mt-6 w-60 gap-1.5 *:transition hover:bg-gray-200 dark:hover:bg-slate-900"
              aria-disabled={pending}
              disabled={pending}
            >
              Add Securities Account
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}

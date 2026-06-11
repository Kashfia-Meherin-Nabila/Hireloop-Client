"use client";

import React, { useState } from "react";
import {
  Form,
  Fieldset,
  TextField,
  Label,
  Input,
  TextArea,
  FieldError,
  Select,
  ListBox,
  Switch,
  Button,
} from "@heroui/react";

import toast from "react-hot-toast";
import { Briefcase, Globe } from "@gravity-ui/icons";
import { createJob } from "@/lib/actions/jobs";
import { redirect } from "next/navigation";

export default function PostJobPage() {
  const [mockCompany] = useState({
    name: "Acme Corp (Auto-filled)",
    id: "company_123",
    isApproved: true,
  });

  const [isRemote, setIsRemote] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mockCompany.isApproved) {
      alert("Company not approved");
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const newErrors = {};

    if (!data.jobTitle) newErrors.jobTitle = "Required";
    if (!data.jobCategory) newErrors.jobCategory = "Required";
    if (!data.jobType) newErrors.jobType = "Required";
    if (!data.minSalary) newErrors.minSalary = "Required";
    if (!data.maxSalary) newErrors.maxSalary = "Required";
    if (!isRemote && !data.location) newErrors.location = "Required";
    if (!data.responsibilities) newErrors.responsibilities = "Required";
    if (!data.requirements) newErrors.requirements = "Required";

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    const payload = {
      title: data.jobTitle,
      category: data.jobCategory,
      type: data.jobType,

      salary: {
        min: Number(data.minSalary),
        max: Number(data.maxSalary),
        currency: data.currency || "USD",
      },

      location: {
        city: data.location || "",
        remote: isRemote,
      },

      description: data.responsibilities,
      requirements: data.requirements,
      benefits: data.benefits || "",

      company: {
        name: mockCompany.name,
      },

      createdAt: new Date(),
    };

    const res = await createJob(payload);

    if (res.insertedId) {
      toast.success("Job posted successfully!");
      e.target.reset();
      setIsRemote(false);
      redirect("/dashboard/recruiter/jobs");
    }
  };

  const inputClass =
    "w-full bg-[#1c1c1e] border border-zinc-800 text-white rounded-lg h-12 px-3";

  const textAreaClass =
    "w-full bg-[#1c1c1e] border border-zinc-800 text-white rounded-lg p-3";

  return (
    <div className="min-h-screen bg-[#0d0d0e] text-white py-10">
      <div className="max-w-3xl mx-auto bg-[#121214] p-8 rounded-xl border border-zinc-900">

        {/* HEADER */}
        <div className="mb-8 border-b border-zinc-800 pb-4">
          <h1 className="text-2xl font-semibold">Post a New Job</h1>

          <div className="text-xs text-zinc-400 mt-2 flex items-center gap-2">
            <Briefcase size={14} />
            {mockCompany.name}
          </div>
        </div>

        {/* FORM */}
        <Form onSubmit={handleSubmit} validationErrors={errors}>

          {/* JOB INFO */}
          <Fieldset className="space-y-5">
            <legend className="text-lg">Job Info</legend>

            <TextField name="jobTitle">
              <Label>Title</Label>
              <Input className={inputClass} />
              <FieldError>{errors.jobTitle}</FieldError>
            </TextField>

            <div className="grid md:grid-cols-2 gap-4">

              <Select name="jobCategory" defaultSelectedKeys={[]}>
                <Label>Category</Label>
                <Select.Trigger className={inputClass}>
                  <Select.Value />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="software">Software</ListBox.Item>
                    <ListBox.Item id="design">Design</ListBox.Item>
                    <ListBox.Item id="marketing">Marketing</ListBox.Item>
                    <ListBox.Item id="sales">Sales</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>

              <Select name="jobType">
                <Label>Type</Label>
                <Select.Trigger className={inputClass}>
                  <Select.Value />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="full-time">Full Time</ListBox.Item>
                    <ListBox.Item id="part-time">Part Time</ListBox.Item>
                    <ListBox.Item id="contract">Contract</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>

            </div>

          </Fieldset>

          {/* SALARY */}
          <Fieldset className="space-y-4 mt-6">

            <legend>Salary</legend>

            <div className="grid grid-cols-3 gap-3">

              <TextField name="minSalary">
                <Input placeholder="Min" className={inputClass} />
              </TextField>

              <TextField name="maxSalary">
                <Input placeholder="Max" className={inputClass} />
              </TextField>

              <Select name="currency" defaultSelectedKeys={["USD"]}>
                <Select.Trigger className={inputClass}>
                  <Select.Value />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="USD">USD</ListBox.Item>
                    <ListBox.Item id="BDT">BDT</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>

            </div>
          </Fieldset>

          {/* LOCATION */}
          <Fieldset className="mt-6">

            <div className="flex justify-between items-center mb-2">
              <Label>Location</Label>

              <Switch isSelected={isRemote} onChange={setIsRemote}>
                Remote
              </Switch>
            </div>

            <TextField name="location">
              <Input
                className={inputClass}
                disabled={isRemote}
                placeholder="City / Country"
              />
            </TextField>

          </Fieldset>

          {/* DESCRIPTION */}
          <Fieldset className="mt-6 space-y-4">

            <TextField name="responsibilities">
              <Label>Responsibilities</Label>
              <TextArea className={textAreaClass} rows={4} />
            </TextField>

            <TextField name="requirements">
              <Label>Requirements</Label>
              <TextArea className={textAreaClass} rows={4} />
            </TextField>

            <TextField name="benefits">
              <Label>Benefits</Label>
              <TextArea className={textAreaClass} rows={3} />
            </TextField>

          </Fieldset>

          {/* SUBMIT */}
          <div className="flex justify-end mt-6">
            <Button type="submit">Post Job</Button>
          </div>

        </Form>
      </div>
    </div>
  );
}
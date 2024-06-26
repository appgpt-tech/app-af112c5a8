//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const LeaveRequestsTitle = () => {
  const record = useRecordContext();
  return <span>LeaveRequests {record ? `"${record.requestId}"` : ''}</span>;
};

export const LeaveRequestsList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <NumberField source="requestId" />
      <ReferenceField source="employeeId" reference="employees" />
      <TextField source="typeOfLeave" />
      <DateField source="startDate" />
      <DateField source="endDate" />
      <TextField source="reason" />
      <TextField source="approvalStatus" />
      <ReferenceField source="approverUserId" reference="users" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const LeaveRequestsEdit = () => (
  <Edit title={<LeaveRequestsTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <NumberInput source="requestId" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="employeeId" reference="employees" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="typeOfLeave" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="startDate" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="endDate" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="reason" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="approvalStatus" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="approverUserId" reference="users" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const LeaveRequestsCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <NumberInput source="requestId" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="employeeId" reference="employees" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="typeOfLeave" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="startDate" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="endDate" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="reason" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="approvalStatus" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="approverUserId" reference="users" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  <ReferenceInput
    source="employeeId"
    label="employeeId"
    reference="employees"
    alwaysOn
  />,
  ,
  ,
  ,
  ,
  ,
  <ReferenceInput
    source="approverUserId"
    label="approverUserId"
    reference="users"
    alwaysOn
  />,
];

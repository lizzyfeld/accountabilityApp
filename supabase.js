import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = "https://eamylqiudnmkufnbvruf.supabase.co";
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhbXlscWl1ZG5ta3VmbmJ2cnVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg0NzUyNDcsImV4cCI6MTk4NDA1MTI0N30.Jmz4dK4VV2NPczLdiMYSgX_iipMcdif-JiDIzmlRIfA";

export const supabase = createClient(supabaseUrl, anonKey, {
    localStorage: AsyncStorage,
    autoRefreshToke: true,
    persistsSession: true,
    detectSessoinInUrl: true
});